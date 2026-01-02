import {
  Card,
  CardContent,
  Typography,
  // Chip,
  Avatar,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";

// const priorityColor = {
//   High: "#ffebe6",
//   Medium: "#fff4d6",
//   Low: "#e6f4ea",
// };

// const priorityText = {
//   High: "#d92d20",
//   Medium: "#b54708",
//   Low: "#027a48",
// };

// const statusBorderColor = {
//   "Trip Created": "#94a3b8",
//   "Trip Assigned": "#3b82f6",
//   "Trip Inprogress": "#f59e0b",
//   "Trip Completed": "#22c55e",
//   "Trip Cancelled": "#ef4444",
// };

const TaskCard = ({ task }) => {
  const router = useRouter();
  // console.log("taskkkk", task);
  return (
    <>
      <Card
        variant="outlined"
        onClick={() => router.push(`/dashboard/trip-master/edit/${task.id}`)}
        // onClick={() => console.log("Trip Card Data:", task)}
        sx={{
          position: "relative",
          mb: 1,
          borderRadius: 2,
          cursor: "pointer",
          overflow: "hidden",
          userSelect: "none",

          /* Base */
          transition:
            "transform 180ms cubic-bezier(0.4,0,0.2,1), box-shadow 180ms ease",

          /* Hover pop */
          "&:hover": {
            transform: "translateY(-2px) scale(1.01)",
            boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
            backgroundColor: "#fafafa",
          },

          /* Press */
          "&:active": {
            transform: "translateY(0px) scale(0.99)",
          },

          /* ✨ Flicker / gloss */
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
            transform: "translateX(-120%)",
            transition: "transform 650ms ease",
            pointerEvents: "none",
          },

          "&:hover::before": {
            transform: "translateX(120%)",
          },
        }}
      >
        <CardContent sx={{ p: 1.25 }}>
          {/* Trip Number */}
          <Typography fontWeight={600} fontSize={13} lineHeight={1.2}>
            {task.trip_id}
          </Typography>

          {/* Vehicle */}
          <Typography
            fontSize={11.5}
            color="text.secondary"
            lineHeight={1.2}
            mt={0.25}
          >
            🚚 {task.vehicle_number}
          </Typography>

          {/* Driver + Priority */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={0.75}
          >
            <Box display="flex" alignItems="center" gap={0.75}>
              <Avatar sx={{ width: 20, height: 20, fontSize: 11 }}>
                {task.driver_name[0]}
              </Avatar>
              <Typography fontSize={11.5} color="text.secondary">
                {task.driver_name}
              </Typography>
            </Box>

            {/* <Chip
              size="small"
              label={task.priority}
              sx={{
                height: 20,
                fontSize: 10.5,
                px: 0.5,
                borderLeft: `3px solid ${statusBorderColor[task.trip_status]}`,
                backgroundColor: priorityColor[task.priority],
                color: priorityText[task.priority],
              }}
            /> */}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default TaskCard;
