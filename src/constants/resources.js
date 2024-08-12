//all ressources info
import { Link, Typography } from "@mui/material";
import Drivesafe from "../images/resourceImages/drivesafe.png";
import CampusLifeAndEngagement from "../images/resourceImages/campus-life-and-engagement.png";
import EUSMHC from "../images/resourceImages/eus-mhc.png";
import McGillSecurity from "../images/resourceImages/mcgill-security.jpg";
import McGill from "../images/resourceImages/mcgill.png";
import MSERT from "../images/resourceImages/MSERT.png";
import Nightline from "../images/resourceImages/nightline.jpeg";
import RedFrogs from "../images/resourceImages/red-frogs.jpg";
import Walksafe from "../images/resourceImages/walksafe.png";
import StudentWellnessHub from "../images/resourceImages/student-wellness-hub.png";
import PeerSupport from "../images/resourceImages/peer-support.png";
import OSVERSE from "../images/resourceImages/osverse.png";
import SAA from "../images/resourceImages/saa.jpg";
import SACOMSS from "../images/resourceImages/sacomms.jpeg";
import SEDE from "../images/resourceImages/sede.png";
import LICM from "../images/resourceImages/licm.png";

export const RESOURCES = [
  {
    name: "Drivesafe",
    image: Drivesafe,
    phoneNumber: "(514) 398-8040",
    description: (
      <Typography variant="p">
        This student-run service of the Students’ Society of McGill University
        (SSMU) drives students safely anywhere on the island of Montreal for
        free. Don’t hesitate to give them a call during Frosh if you are looking
        for a safe way to get home! Leaders and staff can also call them for you
        at night events. For more information, check out their{" "}
        <Link href="https://drivesafe.ssmu.ca/">website!</Link>
      </Typography>
    ),
  },
  {
    name: "Walksafe",
    phoneNumber: "(514) 398-2498",
    image: Walksafe,
    description: (
      <Typography variant="p">
        This student-run SSMU service has the goal of bringing you home safely.
        During and after Frosh, we encourage you to never walk home alone. If
        none of your friends or Leaders are around, give them a call and one of
        their volunteers will walk you home for free. Leaders and staff on duty
        can also call them for you at night events. For more information, check
        out their <Link href="https://walksafe.ssmu.ca/">website!</Link>
      </Typography>
    ),
  },
  {
    name: "M-SERT",
    phoneNumber: "(514) 398-5216",
    image: MSERT,
    description: (
      <Typography variant="p">
        The McGill Student Emergency Response Team (M-SERT) is a volunteer
        service supported SSMU whose members provide emergency first aid
        services to McGill University and the Montreal community. Their
        membership includes over 50 amazing volunteers who hold a certification
        at the Canadian Red Cross Emergency First Responder level. If you need
        medical attention during a frosh event, M-SERT will be there to help.
        For more information, check out their{" "}
        <Link href="http://msert.sus.mcgill.ca/about/">website!</Link>
      </Typography>
    ),
  },
  {
    name: "RedFrogs",
    phoneNumber: null,
    image: RedFrogs,
    description: (
      <Typography variant="p">
        Red Frog volunteers are super nice people that will always have a
        granola bar or water on hand! They hang out at a designated chill zone
        (your leaders know where it is) and are always down to chat if you want
        a break from the night events. For more information, check out their{" "}
        <Link href="https://ca.redfrogs.com/">website</Link>!
      </Typography>
    ),
  },
  {
    name: "Nightline",
    phoneNumber: "(514) 398-6246",
    image: Nightline,
    description: (
      <Typography variant="p">
        McGill Students’ Nightline is a student-run listening service which
        provides the community with a variety of support.This includes anything
        from information to crisis management and referrals. You can even call
        them to ask what’s the best poutine place in Montreal! Their service is
        confidential, anonymous and non-judgmental. They are an English service
        that accepts calls from everyone. For more information, check out their{" "}
        <Link href="https://nightline.ssmu.ca/">website! </Link>
      </Typography>
    ),
  },
  {
    name: "EUS Health",
    phoneNumber: null,
    image: EUSMHC,
    description: (
      <Typography variant="p">
        Throughout your time at McGill, the Engineering Undergraduate Society
        provides you with resources made by fellow students. Most importantly,
        you can file an incident though them at any point for any reason! You
        can also reach out to both the EUS Equity and Mental Health Committees
        with questions. For more information and access to the Incident Response
        Form, check out their{" "}
        <Link href="https://equitycommissioner.typeform.com/to/nMg32N">
          website!
        </Link>
      </Typography>
    ),
  },
  {
    name: "McGill Security",
    image: McGillSecurity,
    phoneNumber: "(514) 398-3000",
    description: (
      <Typography variant="p">
        The Security Services Team strives to create and maintain a safe
        environment at both McGill campuses (Downtown and Macdonald Campus) for
        students, staff, faculty and visitors. They provide support if you are
        in immediate danger on campus or need assistance reporting to the
        police. For more information, check out their{" "}
        <Link href="https://www.mcgill.ca/campussafety/security-services">
          website.
        </Link>
      </Typography>
    ),
  },
  {
    name: "The Office of the Dean of Students",
    image: McGill,
    phoneNumber: "(514) 398-4990",
    description: (
      <Typography variant="p">
        The Dean, Associate Dean of Students and the staff in the Office of the
        Dean of Students, assist students during their years at McGill. They are
        happy to answer any questions or provide advice and referrals to the
        appropriate individuals or offices on campus. The Dean of Students, as
        part of a senior collaborative team is committed to promoting your
        success in academic and personal areas. In addition this office oversees
        student rights and responsibilities, academic integrity, academic
        advising, the student disciplinary process and student recognition. For
        more information, check out their{" "}
        <Link href="https://www.mcgill.ca/deanofstudents/">website</Link> .
      </Typography>
    ),
  },
  {
    name: "McGill Campus Life & Engagement (CL&E)",
    image: CampusLifeAndEngagement,
    phoneNumber: null,
    description: (
      <Typography variant="p">
        Campus Life& Engagement (CL&E) supports students at the different stages
        in their life at McGill. By collaborating with various University
        departments and student groups, CL&E is there to help you connecting to
        the resources and opportunities that will help you make the most of your
        time at McGill. You can depend on CL&E as a source for helping you
        navigate the University, connect to meaningful opportunities, and
        develop your interests and skills. For more information, check out their{" "}
        <Link href="https://www.mcgill.ca/cle/">website</Link>.
      </Typography>
    ),
  },
  {
    name: "McGill Student Health Services",
    phoneNumber: null,
    image: StudentWellnessHub,
    description: (
      <Typography variant="p">
        Student Health Service provides McGill students with quality,
        comprehensive health care in a convenient campus location. Their
        services are specifically geared towards the unique health needs of
        students, and are delivered by caregivers sensitive to – and experienced
        with – their particular health concerns. For more information, check out
        their <Link href="https://www.mcgill.ca/wellness-hub/">website</Link>.
      </Typography>
    ),
  },
  {
    name: "McGill Counselling Services",
    phoneNumber: null,
    image: StudentWellnessHub,
    description: (
      <Typography variant="p">
        Whether providing assistance during a crisis, teaching relaxation
        techniques, or discussing a failed exam or broken heart, the McGill
        Counselling Service is here to help. This service works to provide
        students with effective therapy, knowledgeable support, and the
        opportunity to develop the skills they need to be successful in both
        school and life. For more information, check out their{" "}
        <Link href="https://www.mcgill.ca/wellness-hub/">website</Link>.
      </Typography>
    ),
  },
  {
    name: "Peer support Centre (PSC)",
    phoneNumber: null,
    image: PeerSupport,
    description: (
      <Typography variant="p">
        Feeling stressed? Lonely? Down? Or just want to chat? The Peer Support
        Centre is ready to hear you out. The PSC is a student-run service of the
        Students’ Society of McGill University (SSMU). This service is free to
        all McGill students and offers one-on-one, confidential and
        non-judgmental peer support and resource referral. For more information,
        check out their <Link href="http://ssmu.mcgill.ca/psc/">website</Link>.
      </Typography>
    ),
  },
  {
    name: "Office of the Associate Provost for Equity and Academic Policies",
    phoneNumber: null,
    image: SEDE,
    description: (
      <Typography variant="p">
        Formally known as The Social Equity and Diversity Education (SEDE)
        Office, the Office of the Associate Provost for Equity and Academic
        Policies provides information, education and training to all areas of
        the University in order to cultivate a respectful and supportive campus.
        By connecting with local organizations, the Office of the Associate
        Provost for Equity and Academic Policies Program also provides McGill's
        students and staff with community-based learning experiences that foster
        leadership and promote a deeper understanding of diversity. For more
        information, check out their{" "}
        <Link href="https://www.mcgill.ca/branches-program/">website</Link>.
      </Typography>
    ),
  },
  {
    name: "Student Accessibility and Achievement (SAA)",
    phoneNumber: null,
    image: SAA,
    description: (
      <Typography variant="p">
        Do you have a disability, mental health condition, chronic illness or
        other impairment that may impact your McGill experience? Visit the
        Student Accessibility and Achievement to find out about the services and
        resources available to students through the SAA. For more information,
        check out their <Link href="https://www.mcgill.ca/access-achieve/">website</Link>.
        If you have any questions or concerns about accessibility during Frosh,
        please reach out to the Engineering Inclusivity Coordinator for more
        details at oweek.inclusivity@mcgilleus.ca
      </Typography>
    ),
  },
  {
    name: "Office for Sexual Violence Response, Support and Education (OSVERSE)",
    phoneNumber: null,
    image: OSVERSE,
    description: (
      <Typography variant="p">
        This McGill service provides confidential, non-judgmental and
        non-directional support and education to students, faculty and staff of
        all genders who have been impacted by sexual violence. Their services
        include crisis support for incidents of sexual & gender-based violence,
        reporting information, referrals and accompaniment to internal and
        external resources and they can be accessed in both French and English.
        For more information, check out their{" "}
        <Link href="https://www.mcgill.ca/osvrse/our-office">website</Link>.
      </Typography>
    ),
  },
  {
    name: "Sexual Assault Centre of the McGill Students’ Society (SACOMSS)",
    phoneNumber: null,
    image: SACOMSS,
    description: (
      <Typography variant="p">
        The Sexual Assault Centre of the McGill Students’ Society (SACOMSS) is a
        volunteer-run organization committed to assist survivors of sexual
        assault and their allies through direct support, advocacy, and outreach.
        For more information, check out their{" "}
        <Link href="http://www.sacomss.org/wp/">website</Link>.
      </Typography>
    ),
  },
  {
    name: "Legal Information Clinic at McGill (LICM)",
    phoneNumber: "(514)-398-6792",
    image: LICM,
    description: (
      <Typography variant="p">
        The LICM is committed to increasing access to justice for
        McGill and Montreal communities and to meeting the needs of
        students and marginalized groups because justice matters for
        everyone.
        For more information, check out their{" "}
        <Link href="https://licm.ca/">website</Link>.
      </Typography>
    ),
  },
];
