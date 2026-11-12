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
        "Secure coding"
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
