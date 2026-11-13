// All of the site's content lives here. Edit this file (or use the in-page editor:
// add #edit to the address, or press Shift+E) and the page rebuilds from it.
window.SITE = {
  "name": "Paul DeFrain",
  "headline": "I investigate incidents and build the tools to catch them.",
  "intro": "Cybersecurity analyst finishing a master's at Penn State. I build detection tooling, write up investigations, and spend my spare time making security tools I actually use.",
  "links": {
    "github": "https://github.com/paullydd",
    "linkedin": "https://www.linkedin.com/in/paul-defrain-a09310193/",
    "email": "paul.defrain@icloud.com",
    "resume": "resume.pdf"
  },
  "profile": [
    {
      "label": "Focus",
      "value": "Security operations, detection engineering, digital forensics"
    },
    {
      "label": "Degree",
      "value": "M.P.S., Cybersecurity Analytics & Operations, Penn State · 4.0 GPA"
    },
    {
      "label": "Graduating",
      "value": "December 2026"
    },
    {
      "label": "Based in",
      "value": "Lehigh Valley, Pennsylvania"
    },
    {
      "label": "Open to",
      "value": "SOC analyst, forensics, risk and IT security roles"
    }
  ],
  "categories": [
    {
      "key": "detection",
      "label": "Detection"
    },
    {
      "key": "investigation",
      "label": "Investigations"
    },
    {
      "key": "tool",
      "label": "Tools"
    },
    {
      "key": "research",
      "label": "Research"
    }
  ],
  "cases": [
    {
      "slug": "soc-forge",
      "name": "SOC-Forge",
      "cat": "detection",
      "kind": "Detection platform",
      "status": "active",
      "one": "A Python security operations platform for detection and investigation.",
      "lede": "SOC-Forge is my own security operations platform. It detects and correlates attacks in Windows security events, then lays out each investigation so you can see why an alert fired and how the attack unfolded, not just that it happened.",
      "did": [
        "Built detection and correlation for brute-force attacks, password spraying, account lockouts, privilege escalation, RDP activity and scheduled tasks in Windows security events",
        "Built analyst investigation workflows that bring together alerts, timelines, indicators, evidence, hypotheses and attack reconstruction",
        "Added MITRE ATT&CK coverage, case management and investigation reporting",
        "Wrote automated tests across the analysis workflows so detections keep behaving reliably as the platform grows",
        "Kept it a local analyst platform with one shared pipeline behind the web demo, terminal console and CLI"
      ],
      "findings": [],
      "next": "Replaying capture-the-flag logs through SOC-Forge to measure what it catches and what it misses.",
      "log": [
        "ingest ctf_replay.jsonl",
        "detect rules=loaded",
        "report coverage: caught vs missed"
      ],
      "stack": [
        "Python",
        "Windows event logs",
        "MITRE ATT&CK",
        "Detection engineering",
        "Event correlation",
        "Log analysis",
        "Git"
      ],
      "url": ""
    },
    {
      "slug": "log-analyzer",
      "name": "Python Security Log Analyzer",
      "cat": "detection",
      "kind": "Detection script",
      "status": "shipped",
      "one": "Detects brute force, password spraying and account compromise in Windows security logs.",
      "lede": "A modular Python pipeline that reads Windows security event logs, finds brute-force bursts, ties them to the login and process launches that follow, and explains every alert it raises. It was my first detection tool and the starting point for SOC-Forge.",
      "did": [
        "Parsed Windows security event logs for failed logins (4625), successful logins (4624) and process creation (4688)",
        "Detected brute-force bursts by account and by source IP with a sliding 60-second window, raising one alert per burst instead of one per failed login",
        "Caught password spraying (many accounts, few tries each, under lockout limits) and low-and-slow guessing spread over hours, which never form a burst",
        "Correlated a burst or spray, a successful login from the same IP and the processes that followed into a critical compromise-chain alert mapped to MITRE ATT&CK (T1110, T1110.003, T1078, T1059)",
        "Scored each alert from the evidence and listed the reasons behind every score, so an analyst can see why it fired",
        "Produced an escaped HTML report plus JSON and CSV export, with command-line filters and tunable thresholds",
        "Validated it on labeled attack scenarios and on random noise, where it raises zero alerts, with tests that run on every push"
      ],
      "findings": [],
      "next": "Catching attacks spread across many source IPs, then baselining each account's normal logins.",
      "log": [
        "4625 x8  jdoe from 10.0.0.66 over RDP in 14 seconds",
        "4624 jdoe from 10.0.0.66, 5m 56s later",
        "4688 powershell.exe, cmd.exe, whoami.exe, net.exe",
        "CRITICAL compromise chain  confidence=0.85  T1110 T1078 T1059"
      ],
      "stack": [
        "Python",
        "Windows event logs",
        "Log analysis",
        "Detection engineering",
        "Event correlation"
      ],
      "url": "https://github.com/paullydd/python-log-parser"
    },
    {
      "slug": "ml-anomaly-ids",
      "name": "ML Network Anomaly Detection",
      "cat": "detection",
      "kind": "Prototype IDS",
      "status": "active",
      "one": "An intrusion detection prototype that uses machine learning on network traffic.",
      "lede": "A prototype intrusion detection system that learns what normal network and login activity looks like, then flags flows that don't fit. It uses unsupervised machine learning, so it doesn't need labeled attack data to get started.",
      "did": [
        "Wrote a dependency-free parser for .pcap and .pcapng captures and turned packets into network flows",
        "Engineered flow features: ports, protocol, packet and byte counts, duration, time between packets, and TCP SYN and ACK counts",
        "Joined Windows logon activity (4624, 4625, 4688), such as failed logons per source IP, onto each flow",
        "Trained an Isolation Forest that scores every flow, assigns a severity and explains in plain words which features made it stand out",
        "Built a live mode with Scapy that scores flows as they finish, using the same flow code as batch mode",
        "Packaged it as a command-line tool, anomaly-detect, with an HTML report, Streamlit dashboards and a pytest suite",
        "Built a synthetic capture with a hidden attack, lined up with sample Windows logs, to measure what the model catches"
      ],
      "findings": [
        "On the sample attack, the exfiltration upload scored as the most unusual flow and the RDP session after the brute force came next",
        "It missed the port scan and the brute-force attempts: each one is a small flow that looks normal by itself, which is where rule-based detection like my log analyzer fits",
        "About 5% of normal flows were flagged, mostly large file transfers, so tuning to each network matters. In live testing, retraining on a recent baseline cut false positives a lot",
        "It's a lead generator, not a replacement for signature-based tools like Suricata or Zeek"
      ],
      "next": "Adding cross-flow features such as distinct ports per source to catch scans and brute force, then measuring detection rates on a labeled dataset like CIC-IDS2017.",
      "log": [
        "sample   generate a capture with a hidden attack",
        "run      logs, flows, features, model, report",
        "Critical 192.168.1.22 -> 203.0.113.50:443  bytes sent unusually high",
        "live     sudo, score flows on en0 as they finish"
      ],
      "stack": [
        "Python",
        "Machine learning",
        "Anomaly detection",
        "Packet analysis",
        "Network traffic analysis",
        "Scapy",
        "Windows event logs",
        "pytest"
      ],
      "url": "https://github.com/paullydd/ml-network-detection"
    },
    {
      "slug": "shipco",
      "name": "Shipco Data Leak Investigation",
      "cat": "investigation",
      "kind": "Incident investigation",
      "status": "closed",
      "one": "Reconstructed credential misuse and data exfiltration in a cyber range.",
      "lede": "A simulated enterprise data-leak investigation on the Penn State Cyber Range. I worked through the evidence to rebuild what the attacker did, from stolen credentials to data leaving the company through a look-alike domain.",
      "did": [
        "Analyzed centralized system logs, SSH activity, Bash history, web application events and mail-server evidence",
        "Traced compromised credentials, unauthorized file access, privilege escalation, lateral activity and email spoofing",
        "Followed the exfiltration of sensitive data to a typo-squatted external domain",
        "Assessed weaknesses in centralized logging, privileged access monitoring, authentication, file auditing and data loss prevention"
      ],
      "findings": [
        "MFA, to blunt credential misuse",
        "Privileged access management, least privilege and file auditing, to limit and record what a compromised account can touch",
        "Centralized log collection with SIEM alerting, so the next intrusion is caught and traced faster",
        "DLP controls, to stop sensitive data leaving through look-alike domains"
      ],
      "next": "",
      "log": [],
      "stack": [
        "Digital forensics",
        "Incident response",
        "Linux",
        "Log analysis",
        "Indicators of compromise"
      ],
      "url": ""
    },
    {
      "slug": "cyberdash",
      "name": "cyberdash",
      "cat": "tool",
      "kind": "Desktop tool",
      "status": "active",
      "one": "A Mac security dashboard I run on my own machine.",
      "lede": "cyberdash is a standalone Mac dashboard that shows the security state of my machine in one view. The basic dashboard is stable and I'm building out a fuller mode.",
      "did": [
        "Shipped a stable basic dashboard as a standalone Mac app"
      ],
      "findings": [],
      "next": "Adding open ports, live connections, DNS, security checks, storage, top processes, GitHub sign-in status and SOC-Forge status.",
      "log": [],
      "stack": [
        "macOS",
        "Python",
        "Security monitoring",
        "Network traffic analysis"
      ],
      "url": ""
    },
    {
      "slug": "memory-safety",
      "name": "Memory Safety Bug Discovery",
      "cat": "research",
      "kind": "Vulnerability analysis",
      "status": "closed",
      "one": "Analyzed four C memory-safety vulnerabilities and their fixes.",
      "lede": "For IST 543, I found and analyzed four memory-safety bugs in C code, explained how each one could be exploited and worked out the fix.",
      "did": [
        "Analyzed four separate memory-safety vulnerabilities in C",
        "Explained the root cause of each and how it could be exploited",
        "Fixed them with bounds checking and safer string handling"
      ],
      "findings": [],
      "next": "",
      "log": [],
      "stack": [
        "C",
        "Secure coding",
        "Vulnerability analysis"
      ],
      "url": ""
    },
    {
      "slug": "container-security",
      "name": "Container Security",
      "cat": "research",
      "kind": "Course project",
      "status": "closed",
      "one": "Securing containers from image to cluster.",
      "lede": "A project on securing a container workload end to end, from the image and registry to the cluster it runs on and how you watch it.",
      "did": [
        "Covered image and registry security",
        "Worked through Docker hardening",
        "Covered Kubernetes security controls",
        "Covered observability for containerized workloads"
      ],
      "findings": [],
      "next": "",
      "log": [],
      "stack": [
        "Docker",
        "Kubernetes",
        "Cloud security",
        "Security monitoring"
      ],
      "url": ""
    },
    {
      "slug": "cyber-range-rubric",
      "name": "Cyber Range Rubric",
      "cat": "research",
      "kind": "Evaluation framework",
      "status": "closed",
      "one": "A 1 to 5 scoring framework for comparing cyber ranges.",
      "lede": "A scoring rubric for choosing a cyber range, the training platforms security teams practice on. It rates each range from 1 to 5 on the things that matter when you're buying one.",
      "did": [
        "Defined the criteria: graphical capability, realism, cost, support and documentation, and fit for academic or industry use",
        "Built a 1 to 5 scale for each criterion so ranges can be compared side by side"
      ],
      "findings": [],
      "next": "",
      "log": [],
      "stack": [
        "Evaluation design",
        "Reporting"
      ],
      "url": ""
    },
    {
      "slug": "cache-flow",
      "name": "Cache Flow",
      "cat": "tool",
      "kind": "Desktop app",
      "status": "active",
      "one": "A private, local-only personal finance tracker.",
      "lede": "A Mac app for tracking accounts, bills and net worth, built as an alternative to paid tools. It's designed privacy-first: nothing is linked to a bank and the data stays on the device.",
      "did": [
        "Passcode-protected the app",
        "Kept all data local, with manual entry and CSV statement import instead of bank linking",
        "Kept a separate public copy of the code with all personal data removed"
      ],
      "findings": [],
      "next": "",
      "log": [],
      "stack": [
        "macOS",
        "Least privilege",
        "Privacy by design"
      ],
      "url": ""
    },
    {
      "slug": "bitebudget",
      "name": "BiteBudget",
      "cat": "tool",
      "kind": "Web app",
      "status": "active",
      "one": "A meal planner with calorie tracking and grocery budgets.",
      "lede": "A web app that plans meals, tracks calories and macros, and keeps a daily, weekly or monthly grocery budget in one place.",
      "did": [
        "Built meal planning for breakfast, lunch, dinner and snacks",
        "Added calorie and macro tracking",
        "Added grocery budgeting by day, week or month",
        "Used it myself for a week to find rough spots, starting with a shorter onboarding"
      ],
      "findings": [],
      "next": "",
      "log": [],
      "stack": [
        "Web apps",
        "JavaScript",
        "Git"
      ],
      "url": "https://github.com/paullydd/bitebudget"
    }
  ],
  "skills": [
    {
      "title": "Security operations",
      "items": [
        "Log analysis",
        "SIEM",
        "Incident response",
        "Threat hunting",
        "Anomaly detection",
        "Detection engineering",
        "Event correlation",
        "MITRE ATT&CK",
        "Security monitoring"
      ]
    },
    {
      "title": "Networking and analysis",
      "items": [
        "Wireshark",
        "Nmap",
        "Scapy",
        "Network traffic analysis",
        "Packet analysis"
      ]
    },
    {
      "title": "Systems and identity",
      "items": [
        "Windows",
        "Windows event logs",
        "Linux",
        "macOS",
        "Active Directory",
        "Group Policy",
        "RBAC",
        "Least privilege"
      ]
    },
    {
      "title": "Forensics",
      "items": [
        "Digital forensics",
        "Volatility",
        "Rekall",
        "Memory forensics",
        "Indicators of compromise"
      ]
    },
    {
      "title": "Programming and tools",
      "items": [
        "Python",
        "Bash",
        "C",
        "JavaScript",
        "Git",
        "GitHub",
        "VS Code",
        "Secure coding",
        "Machine learning",
        "scikit-learn",
        "Pandas",
        "Streamlit",
        "pytest"
      ]
    },
    {
      "title": "Cloud and containers",
      "items": [
        "Docker",
        "Kubernetes",
        "Cloud security",
        "Vulnerability analysis"
      ]
    }
  ],
  "education": [
    {
      "degree": "M.P.S., Cybersecurity Analytics & Operations",
      "school": "Penn State World Campus",
      "note": "4.0 GPA · expected December 2026",
      "done": 30,
      "total": 33
    },
    {
      "degree": "Graduate Certificate, Information Systems Cybersecurity",
      "school": "Penn State World Campus",
      "note": "4.0 GPA · awarded August 2025",
      "done": 0,
      "total": 0
    },
    {
      "degree": "B.S., Business Administration (Management)",
      "school": "Kutztown University of Pennsylvania",
      "note": "awarded December 2020",
      "done": 0,
      "total": 0
    },
    {
      "degree": "A.A., Business Administration",
      "school": "Lehigh Carbon Community College",
      "note": "",
      "done": 0,
      "total": 0
    }
  ],
  "aside": {
    "title": "Why business plus security",
    "text": "My business background shapes how I write up findings. A good investigation ends with fixes someone can approve and fund, not just a list of what went wrong. The Shipco case is a good example: every gap I found came with a control and a reason it was worth the cost."
  },
  "contact": {
    "title": "Hiring for a SOC or security analyst role?",
    "text": "I'm happy to walk through any of these projects live."
  }
};
