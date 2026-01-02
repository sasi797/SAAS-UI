import { Paper, Typography, Box } from "@mui/material";
import TaskCard from "./TaskCard";

const StatusColumn = ({ title, tasks }) => (
  <Paper
    variant="outlined"
    sx={{
      width: 240,
      minWidth: 240, // ⬅️ important
      height: "100%", // ⬅️ fill board height
      display: "flex",
      flexDirection: "column",
      borderRadius: 2,
      backgroundColor: "#fafafa",
    }}
  >
    {/* Header (fixed) */}
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Typography fontSize={13} fontWeight={600}>
          {title}
        </Typography>

        <Typography fontSize={13} color="text.secondary" fontWeight={600}>
          ({tasks?.length || 0})
        </Typography>
      </Box>
    </Box>

    {/* Cards (scrollable area) */}
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        p: 0.5,
      }}
    >
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  </Paper>
);

export default StatusColumn;
