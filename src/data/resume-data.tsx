import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bede Carroll",
  initials: "BC",
  location: "San Francisco Bay Area, CA, USA",
  locationLink: "https://www.google.com/maps/place/San_Francisco_Bay_Area",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in technical architecture design and remote team
      leadership.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/4151340?v=4",
  personalWebsiteUrl: "https://bedecarroll.com",
  contact: {
    email: "cv@bedecarroll.com",
    tel: "+16504958623",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bedecarroll",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bedecarroll/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/bedecarroll",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Charles Sturt University",
      degree: "Master of Networking and Systems Administration",
      start: "2012",
      end: "2012",
    },
    {
      school: "Charles Sturt University",
      degree: "Graduate Certificate in Information Systems Security",
      start: "2011",
      end: "2012",
    },
  ],
  work: [
    {
      company: "TikTok USDS",
      link: "https://usds.tiktok.com",
      badges: ["Cloud", "Networking", "SRE", "Load Balancer", "Python"],
      title: "Site Reliablility Engineer, Cloud Infrastructure",
      start: "2024",
      end: null,
      description: (
        <>
          Build, design and maintain production cloud infrastructure.

          <ul className="list-inside list-disc">
            <li>
              Build, maintain, and optimize cloud automation solutions using Ansible, Terraform,
              cloud-init, and Python, reducing deployment times and increasing infrastructure consistency
            </li>
            <li>
              Design, provision, and manage server infrastructure across multi-cloud and hybrid environments,
              ensuring scalability and reliability
            </li>
            <li>
              Implement advanced load balancers with layer 3/layer 4 and layer 7 load balancers
            </li>
            <li>
              Create comprehensive monitoring and observability solutions using cloud-native tooling,
              Grafana, and Kibana, enabling proactive issue detection and rapid incident response
            </li>
            <li>
              Perform in-depth troubleshooting and root cause analysis across complex bare-metal
              and virtualized cloud infrastructure, minimizing service disruptions
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Endsight",
      link: "https://endsight.net",
      badges: [
        "Remote",
        "Python",
        "Flask",
        "Bootstrap",
        "Operations",
      ],
      title: "Senior System Engineer",
      start: "2023",
      end: "2024",
      description: (
        <>
          As a Senior System Engineer at Endsight, I blend my DevOps and Site Reliability/Production Engineering
          expertise with a diverse technology skill set to drive impactful business changes.
          <ul className="list-inside list-disc">
            <li>
              Spearheaded the design, and deployment of a company-wide monorepo using Git, Gitlab and Github,
              enhancing code management and collaboration efficiency.
            </li>
            <li>
              Developed comprehensive dashboards for aggregating multiple monitoring systems,
              streamlining the process of data visualization and analytics.
              This initiative significantly improved operational insights and decision-making capabilities.
            </li>
            <li>
              Engineered internal reporting tools for the Network Operations Center (NOC),
              facilitating real-time data tracking and system performance analysis.
            </li>
            <li>
              Conceptualized and deployed a web-based service catalog utilizing a blend of technologies including
              HTML, Python, Flask, JavaScript, and Bootstrap.
            </li>
            <li>
              At Endsight in my role as a Senior System Engineer I have a keen focus on automating processes,
              optimizing system reliability, and implementing robust, scalable solutions that cater to the
              dynamic needs of the business. As a Senior System Engineer, I not only focus on technical
              implementation but also work to skill up the team through teaching and mentoring.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Facebook/Meta",
      link: "https://facebook.com",
      badges: ["Networking", "Cisco", "Juniper", "Arista", "Python"],
      title: "Network Engineer → Production Engineer",
      start: "2017",
      end: "2023",
      description: (
        <>
          Production Engineer with a network specialization on the Infrastructure Network Engineering team.
          The team is responsible for multiple different production networks at Meta.

          Network engineer for the corporate networking team at Meta. Focused on the office network specifically.
          Responsible for the wired and WAN edge network for the global office footprint and operationally
          involved in the wireless and remote access VPN systems.
          <ul className="list-inside list-disc">
            <li>
              Design new networks from requirements provided by customers and partners
            </li>
            <li>
              Operate a globally distributed office network with well over 100 locations and 10s of thousands of users
            </li>
            <li>
              Operate multiple distinct networks with 10s of thousands of devices
            </li>
            <li>
              Build and maintain automation systems (primarily in Python with some Golang and C++/Rust based systems)
            </li>
            <li>
              Build and action alerts and automate remediations
            </li>
            <li>
              Build dashboards and SNMP/Netconf/XML/JSON monitoring of network device status
            </li>
            <li>
              Member of a 24/7 oncall
            </li>
            <li>
              Mentor and onboard new hires
            </li>
            <li>
              Interview candidates in networking, coding and systems design (interviewed over 120 candidates)
            </li>
            <li>
              Create and assist with the creation of team roadmaps along with project management of roadmap items
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Cisco",
    "Arista",
    "Juniper",
    "Load Balancing",
    "Python",
    "Automation",
    "DNS",
    "DHCP",
    "Troubleshooting",
    "Wireshark",
    "Cloud",
    "Ansible",
    "Terraform",
  ],
  projects: [],
} as const;
