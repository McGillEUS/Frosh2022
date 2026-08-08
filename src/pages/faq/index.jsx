import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";
import { FAQQuestions } from "../../constants/faq";

const categories = [
  { label: "General", value: "general" },
  { label: "Registration", value: "registration" },
  { label: "Frosh", value: "frosh" },
  { label: "EUS", value: "EUS" },
];

export default function FAQ() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(categories[0].value);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
    setSearchTerm("");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredQuestions = FAQQuestions.filter((q) => {
    const matchesSearchTerm = q.question.toLowerCase().includes(searchTerm.toLowerCase());
    return searchTerm ? matchesSearchTerm : q.category === selectedTab;
  });

  // Determine the category to display when a search term is present
  React.useEffect(() => {
    if (searchTerm) {
      setSelectedTab('');
    } else if (!searchTerm && !selectedTab) {
      setSelectedTab(categories[0].value);
    }
  }, [searchTerm, selectedTab]);

  return (
    <div
      style={{
        maxWidth: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
      }}
    >
      <Typography 
        variant="h1" 
        style={{ 
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif", 
          fontWeight: 600,
          fontSize: "5rem",
          textAlign: "center",
        }}>
        FAQ
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Search FAQ"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px" }}
      />
      <Tabs
        value={searchTerm ? '' : selectedTab}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        centered
        style={{ marginBottom: "20px" }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category.label} value={category.value} />
        ))}
      </Tabs>
      {filteredQuestions.map((q, i) => (
        <Accordion
          key={i}
          expanded={expanded === q.question}
          onChange={handleChangeAccordion(q.question)}
          style={{
            marginBottom: "10px",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}bh-content`}
            id={`panel${i}bh-header`}
            style={{
              backgroundColor: theme.palette.background.default,
              borderTopLeftRadius: expanded === q.question ? "10px" : "10px",
              borderTopRightRadius: expanded === q.question ? "10px" : "10px",
            }}
          >
            <Typography sx={{ fontSize: "1.15em" }}>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Typography>{q.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
