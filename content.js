// All of the site's content lives here. Edit this file, or open the site with
// #edit at the end of the address (or press Shift+E) to use the built-in editor.
window.SITE = {
  "name": "Paul DeFrain",
  "headline": "I investigate incidents and build the tools that catch them.",
  "intro": "Master's candidate at Penn State. I build detection tools, measure what they catch and miss, and write up investigations that end in fixes someone can act on.",
  "links": {
    "github": "https://github.com/paullydd",
    "linkedin": "https://www.linkedin.com/in/paul-defrain-a09310193/",
    "email": "paul.defrain@icloud.com",
    "resume": "resume.pdf"
  },
  "profile": [
    {
      "label": "Focus",
      "value": "Detection and incident investigation"
    },
    {
      "label": "Works with",
      "value": "Python, MITRE ATT&CK, Windows event logs, SIEM"
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
      "value": "SOC and security analyst roles. Also interested in detection engineering and forensics"
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
      "url": "https://github.com/paullydd/soc-forge",
      "featured": true,
      "highlights": [
        "30+ detection rules mapped to MITRE ATT&CK, each explained in plain language",
        "Turns a simulated attack chain into correlated, critical cases with recommended actions",
        "Over 1,000 automated tests behind one shared detection pipeline"
      ],
      "images": [
        {
          "src": "images/soc-forge-command-center.webp",
          "caption": "The web workspace (version 3.5 demo run): cases, rule activity and the ATT&CK tactics behind them"
        },
        {
          "src": "images/soc-forge-attack-chain.webp",
          "caption": "Detection lab, attack-chain simulation (version 3.5 run): 6 rules fired, 10 alerts, 5 cases"
        },
        {
          "src": "images/soc-forge-rule-explainability.webp",
          "caption": "Rule explainability: the logic, score modifiers and ATT&CK mapping behind an alert"
        }
      ],
      "diagram": [],
      "side": false,
      "results": [
        {
          "label": "Detection rules",
          "value": "30+ YAML rules, each mapped to MITRE ATT&CK techniques",
          "href": "https://github.com/paullydd/soc-forge/tree/main/soc_forge/rules",
          "linkText": "The rules"
        },
        {
          "label": "Simulated attack chain (sample report)",
          "value": "Version 3.6.1 run: 14 alerts, 5 correlations and 1 threat-hunt finding. Top case: a new privileged account followed by audit-log clearing, rated critical at the maximum risk score of 400, with both accounts involved listed as indicators. The screenshots below come from an earlier version 3.5 run of the same scenario, so their counts differ",
          "href": "samples/soc-forge-attack-chain-report.html",
          "linkText": "The sample report"
        },
        {
          "label": "Reading the report's scores",
          "value": "Risk score adds up the alert scores in a case, plus 30 if a correlation rule fired and 10 for each extra ATT&CK tactic, capped at 400. Confidence on each reconstructed step rises with that alert's score, from 55% up to 98%. It's a weighting, not a measured probability. Quality 100/100 measures how complete the case write-up is (timeline, entities, correlation, actions, story), not detection accuracy"
        },
        {
          "label": "Gaps it reports",
          "value": "Flags what it didn't see, e.g. no execution observed before the persistence step"
        },
        {
          "label": "Automated tests",
          "value": "Over 1,000 test functions, run with pytest",
          "href": "https://github.com/paullydd/soc-forge/tree/main/tests",
          "linkText": "The tests"
        },
        {
          "label": "Not measured yet",
          "value": "Catch rate on real CTF logs. That replay is the next step"
        }
      ],
      "cover": "images/soc-forge-cover.webp",
      "sample": {
        "label": "Sample report",
        "href": "samples/soc-forge-attack-chain-report.html"
      },
      "reproduce": {
        "steps": [
          "git clone https://github.com/paullydd/soc-forge.git",
          "cd soc-forge",
          "python3 -m venv .venv && source .venv/bin/activate",
          "python -m pip install -e .",
          "soc-forge --simulate attack_chain --sim-output out/attack_chain_events.jsonl",
          "soc-forge --input out/attack_chain_events.jsonl --html out/attack_chain_report.html"
        ],
        "expect": "Writes an incident report like the sample, with a critical case for an RDP logon followed by a scheduled task. Exact counts can change between versions as rules are added.",
        "href": "https://github.com/paullydd/soc-forge#quick-start"
      },
      "origin": "Independent project",
      "decision": {
        "title": "Correlating alerts into cases",
        "choice": "I chose to correlate alerts using shared entities and timing, so an analyst can investigate related activity as one case instead of reviewing each alert separately.",
        "tradeoff": "A shared user, host or IP doesn't prove a connection. So every case shows the evidence that ties its alerts together and the gaps it couldn't fill, like the missing execution step in the sample report, and the analyst makes the final call."
      }
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
        "Produced an escaped HTML report plus JSON and CSV export, with command-line filters and tunable thresholds"
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
      "url": "https://github.com/paullydd/python-log-parser",
      "featured": true,
      "highlights": [
        "Zero alerts on 1,000 rows of random login noise across 93 IPs",
        "Raised exactly the 11 expected alerts on labeled attack scenarios",
        "Found a real Kerberos password spray, and the account that fell to it, in public attack logs"
      ],
      "images": [
        {
          "src": "images/log-analyzer-report.webp",
          "caption": "The HTML report: compromise chains, password spraying and brute force, each with the reasons behind its score"
        }
      ],
      "diagram": [],
      "side": false,
      "results": [
        {
          "label": "Noise test",
          "value": "1,000 rows of random logins across 93 IPs: 0 alerts",
          "href": "https://github.com/paullydd/python-log-parser/blob/main/python_log_parser/examples/sample_security_logs.csv",
          "linkText": "The noise file"
        },
        {
          "label": "Labeled scenarios",
          "value": "RDP brute force with compromise, password spray with compromise, brute force then success, low-and-slow guessing, a failed burst: all 11 expected alerts, no extras",
          "href": "https://github.com/paullydd/python-log-parser/blob/main/python_log_parser/examples/attack_scenarios.csv",
          "linkText": "The scenario file"
        },
        {
          "label": "Real attack logs",
          "value": "Kerberos password spray from EVTX-ATTACK-SAMPLES (11 accounts, 4 nonexistent): spray and compromised account both found",
          "href": "https://github.com/paullydd/python-log-parser#tested-on-real-attack-logs",
          "linkText": "How it was tested"
        },
        {
          "label": "Tests",
          "value": "Unit tests for every scenario, input format and edge case, run by GitHub Actions on every push",
          "href": "https://github.com/paullydd/python-log-parser/blob/main/tests/test_detections.py",
          "linkText": "The tests"
        },
        {
          "label": "Known gap",
          "value": "Attacks spread across many source IPs"
        }
      ],
      "cover": "images/log-analyzer-cover.webp",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [
          "git clone https://github.com/paullydd/python-log-parser.git",
          "cd python-log-parser",
          "python3 main.py"
        ],
        "expect": "Prints the 11 alerts for the labeled scenarios and writes reports/attack_scenarios_report.html. Run python3 main.py python_log_parser/examples/sample_security_logs.csv to see the noise test raise nothing.",
        "href": "https://github.com/paullydd/python-log-parser#quick-start"
      },
      "origin": "",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
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
      "url": "https://github.com/paullydd/ml-network-detection",
      "featured": true,
      "highlights": [
        "Ranked a hidden data upload first out of 916 network flows",
        "Missed the port scan and the brute force, and the write-up explains why",
        "Flagged about 5% of normal traffic, mostly large file transfers"
      ],
      "images": [
        {
          "src": "images/ml-ids-report.webp",
          "caption": "Report from the test capture: the hidden upload to 203.0.113.50 ranks first"
        }
      ],
      "diagram": [],
      "side": false,
      "results": [
        {
          "label": "Test data",
          "value": "Synthetic capture: about 10,000 packets, 916 flows from 17 workstations, with an attack lined up with sample Windows logs",
          "href": "https://github.com/paullydd/ml-network-detection/blob/main/anomaly-ids/anomaly_detector/sample.py",
          "linkText": "The capture generator"
        },
        {
          "label": "Exfiltration upload",
          "value": "2 of 2 flows flagged, top score",
          "href": "https://github.com/paullydd/ml-network-detection#results-on-the-sample-data",
          "linkText": "Full results table"
        },
        {
          "label": "RDP session after brute force",
          "value": "2 of 2 flows flagged"
        },
        {
          "label": "RDP brute-force attempts",
          "value": "0 of 16 flagged (missed)"
        },
        {
          "label": "Port scan",
          "value": "0 of 100 single-packet flows flagged (missed)"
        },
        {
          "label": "False positives",
          "value": "42 of 786 normal flows (5.3%), mostly large file transfers"
        }
      ],
      "cover": "images/ml-ids-cover.webp",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [
          "git clone https://github.com/paullydd/ml-network-detection.git",
          "cd ml-network-detection/anomaly-ids",
          "python3 -m venv .venv && source .venv/bin/activate",
          "pip install -e .",
          "anomaly-detect sample",
          "anomaly-detect run"
        ],
        "expect": "Flags about 46 of 916 flows, with the upload to 203.0.113.50 ranked first, and writes reports/anomaly_report.html.",
        "href": "https://github.com/paullydd/ml-network-detection#quick-start"
      },
      "origin": "",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
    },
    {
      "slug": "shipco",
      "name": "Shipco Data Leak Investigation",
      "cat": "investigation",
      "kind": "Incident investigation",
      "status": "completed",
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
      "url": "",
      "featured": true,
      "highlights": [
        "Rebuilt the attack from stolen credentials to data leaving through a look-alike domain",
        "Worked across system logs, SSH activity, Bash history, web and mail-server evidence",
        "Paired every gap with a control: MFA, privileged access management, SIEM alerting and DLP"
      ],
      "images": [],
      "diagram": [
        "Stolen credentials",
        "Unauthorized file access",
        "Privilege escalation",
        "Email spoofing",
        "Exfiltration to a look-alike domain"
      ],
      "side": false,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Penn State coursework",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
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
      "url": "",
      "featured": false,
      "highlights": [],
      "images": [],
      "diagram": [],
      "side": false,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Independent project",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
    },
    {
      "slug": "memory-safety",
      "name": "Memory Safety Bug Discovery",
      "cat": "research",
      "kind": "Vulnerability analysis",
      "status": "completed",
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
      "url": "",
      "featured": false,
      "highlights": [],
      "images": [],
      "diagram": [],
      "side": false,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Penn State coursework (IST 543)",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
    },
    {
      "slug": "container-security",
      "name": "Container Security",
      "cat": "research",
      "kind": "Hardening project",
      "status": "completed",
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
      "url": "",
      "featured": false,
      "highlights": [],
      "images": [],
      "diagram": [],
      "side": false,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Penn State coursework",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
    },
    {
      "slug": "cyber-range-rubric",
      "name": "Cyber Range Rubric",
      "cat": "research",
      "kind": "Evaluation framework",
      "status": "completed",
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
      "url": "",
      "featured": false,
      "highlights": [],
      "images": [],
      "diagram": [],
      "side": false,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Penn State coursework",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
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
      "url": "",
      "featured": false,
      "highlights": [],
      "images": [],
      "diagram": [],
      "side": true,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Independent project",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
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
      "url": "https://github.com/paullydd/bitebudget",
      "featured": false,
      "highlights": [],
      "images": [],
      "diagram": [],
      "side": true,
      "results": [],
      "cover": "",
      "sample": {
        "label": "",
        "href": ""
      },
      "reproduce": {
        "steps": [],
        "expect": "",
        "href": ""
      },
      "origin": "Independent project",
      "decision": {
        "title": "",
        "choice": "",
        "tradeoff": ""
      }
    }
  ],
  "skills": [
    {
      "title": "Detection and response",
      "items": [
        "Log analysis",
        "SIEM",
        "Detection engineering",
        "Event correlation",
        "MITRE ATT&CK",
        "Incident response",
        "Anomaly detection"
      ]
    },
    {
      "title": "Forensics",
      "items": [
        "Digital forensics",
        "Memory forensics",
        "Indicators of compromise"
      ]
    },
    {
      "title": "Networks",
      "items": [
        "Network traffic analysis",
        "Packet analysis",
        "Wireshark",
        "Scapy"
      ]
    },
    {
      "title": "Systems and identity",
      "items": [
        "Windows event logs",
        "Linux",
        "Active Directory",
        "Least privilege"
      ]
    },
    {
      "title": "Programming",
      "items": [
        "Python",
        "Bash",
        "C",
        "Machine learning",
        "Secure coding"
      ]
    },
    {
      "title": "Cloud and containers",
      "items": [
        "Docker",
        "Kubernetes",
        "Cloud security"
      ]
    }
  ],
  "education": [
    {
      "degree": "M.P.S., Cybersecurity Analytics & Operations",
      "school": "Penn State World Campus",
      "note": "4.0 GPA, expected December 2026",
      "done": 30,
      "total": 33
    },
    {
      "degree": "Graduate Certificate, Information Systems Cybersecurity",
      "school": "Penn State World Campus",
      "note": "4.0 GPA, awarded August 2025",
      "done": 0,
      "total": 0
    },
    {
      "degree": "B.S., Business Administration (Management)",
      "school": "Kutztown University of Pennsylvania",
      "note": "Awarded December 2020",
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
  "contact": {
    "title": "Hiring for a SOC or security analyst role?",
    "text": "I'm happy to walk through any of these projects live. Email is the fastest way to reach me."
  },
  "title": "Cybersecurity analyst",
  "photo": "",
  "about": {
    "title": "About me",
    "text": [
      "Most of the projects here started as a question about how a detection really works and turned into a tool I could test against real attack patterns. I pay as much attention to what a tool misses as to what it catches.",
      "Before security I studied business management, and it still shapes how I work. A good investigation ends with fixes someone can approve and fund, not just a list of what went wrong. The Shipco case is a good example: every gap I found came with a control and a reason it was worth the cost.",
      "I use AI-assisted coding to help implement, debug and test parts of these projects. I define the security use cases, review the generated code, validate behavior against test scenarios, and document the results and limitations, including what each tool misses."
    ]
  },
  "training": [
    {
      "title": "Git Fundamentals",
      "provider": "GitMastery",
      "topic": "Developer tools",
      "date": "2026-11-17",
      "minutes": 0,
      "file": "certificates/git-fundamentals.pdf"
    },
    {
      "title": "Cybersecurity senior management and information security governance (ISG)",
      "provider": "Infosec",
      "topic": "Governance",
      "date": "2026-08-03",
      "minutes": 76,
      "file": "certificates/security-governance-isg.pdf"
    },
    {
      "title": "Digital Evidence and Legal Issues",
      "provider": "Infosec",
      "topic": "Forensics",
      "date": "2026-07-26",
      "minutes": 112,
      "file": "certificates/digital-evidence-and-legal-issues.pdf"
    },
    {
      "title": "Recon and footprinting",
      "provider": "Infosec",
      "topic": "Offensive security",
      "date": "2026-06-27",
      "minutes": 34,
      "file": "certificates/recon-and-footprinting.pdf"
    },
    {
      "title": "Container security",
      "provider": "Infosec",
      "topic": "Containers",
      "date": "2025-10-12",
      "minutes": 50,
      "file": "certificates/container-security.pdf"
    },
    {
      "title": "Introduction and Overview of Containers",
      "provider": "Infosec",
      "topic": "Containers",
      "date": "2025-10-12",
      "minutes": 57,
      "file": "certificates/intro-to-containers.pdf"
    },
    {
      "title": "Designing for Security",
      "provider": "Infosec",
      "topic": "Secure design",
      "date": "2025-10-12",
      "minutes": 38,
      "file": "certificates/designing-for-security.pdf"
    },
    {
      "title": "Domain 3: Cloud platform and infrastructure security",
      "provider": "Infosec",
      "topic": "Cloud security",
      "date": "2025-09-15",
      "minutes": 119,
      "file": "certificates/cloud-platform-infrastructure-security.pdf"
    },
    {
      "title": "Domain 2: Cloud data security",
      "provider": "Infosec",
      "topic": "Cloud security",
      "date": "2025-09-14",
      "minutes": 112,
      "file": "certificates/cloud-data-security.pdf"
    }
  ],
  "availability": "Open to SOC analyst roles, graduating December 2026"
};
