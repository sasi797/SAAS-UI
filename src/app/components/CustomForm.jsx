"use client";
import { useState } from "react";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CustomInput from "./form-fields/CustomInput";
import CustomSelect from "./form-fields/CustomSelect";
import CustomMultiSelect from "./form-fields/CustomMultiSelect";
import CustomFileUpload from "./form-fields/CustomFileUpload";
import CustomSwitch from "./form-fields/CustomSwitch";

const fieldComponents = {
  text: CustomInput,
  email: CustomInput,
  password: CustomInput,
  date: CustomInput,
  select: CustomSelect,
  multiselect: CustomMultiSelect,
  file: CustomFileUpload,
  switch: CustomSwitch,
};

const CustomForm = ({ formSchema, formData, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      {/* Tabs with icons */}
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
        sx={{
          px: 2,
          background: "#fafafa",
          mb: 2,
          "& .MuiTab-root": {
            fontWeight: 600,
            textTransform: "none",
            fontSize: "0.95rem",
            minHeight: "44px",
          },
          "& .Mui-selected": {
            color: "#7e5bef",
          },
          "& .MuiTabs-indicator": {
            height: "3px",
            borderRadius: "3px",
            background: "linear-gradient(to right, #7e5bef, #00c6ff)",
          },
        }}
      >
        {formSchema.map((tab, idx) => (
          <Tab
            key={idx}
            icon={tab.icon ? <tab.icon fontSize="small" /> : null}
            iconPosition="start"
            label={tab.tab}
          />
        ))}
      </Tabs>

      {/* Sections with icons */}
      {formSchema[activeTab]?.sections.map((section, sIdx) => (
        <Accordion
          key={sIdx}
          defaultExpanded
          disableGutters
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
            overflow: "hidden",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="small" />}
            sx={{
              background: "linear-gradient(to right, #7e5bef08, #00c6ff08)",
              px: 2,
              py: 1,
              minHeight: "40px !important",
              "& .MuiAccordionSummary-content": {
                margin: 0,
                alignItems: "center",
                gap: 1,
              },
            }}
          >
            {section.icon && <section.icon fontSize="small" />}
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <Grid container spacing={2}>
              {section.fields.map((field, idx) => {
                const FieldComponent = fieldComponents[field.type];
                if (!FieldComponent) return null;

                let gridProps = {};
                if (typeof field.col === "number") {
                  gridProps = { xs: 12, sm: field.col, md: field.col };
                } else if (typeof field.col === "object") {
                  gridProps = { xs: 12, ...field.col };
                }

                return (
                  <Grid item {...gridProps} key={idx}>
                    <FieldComponent
                      {...field}
                      name={field.key}
                      value={formData[field.key]}
                      onChange={onChange}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CustomForm;
