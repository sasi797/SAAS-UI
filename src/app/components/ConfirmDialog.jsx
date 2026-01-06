import { Dialog, DialogContent, Button, Typography, Box } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const ConfirmDialog = ({
  open,
  title = "Delete this item?",
  description = "This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onClose,
  loading = false,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          px: 3,
          py: 2.5,
          boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
          <WarningAmberRoundedIcon
            sx={{
              fontSize: 22,
              color: "#d97706", // soft amber
              mt: "2px",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "#111",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: "0.9rem",
                color: "#666",
                lineHeight: 1.5,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            mt: 3,
          }}
        >
          <Button
            onClick={onClose}
            disabled={loading}
            sx={{
              textTransform: "none",
              fontSize: "0.85rem",
              color: "#555",
              borderRadius: 2,
              px: 1.5,
              "&:hover": {
                backgroundColor: "#f4f4f5",
              },
            }}
          >
            {cancelText}
          </Button>

          <Button
            onClick={onConfirm}
            disabled={loading}
            sx={{
              textTransform: "none",
              fontSize: "0.85rem",
              borderRadius: 2,
              px: 2,
              color: "#fff",
              backgroundColor: "#111",
              "&:hover": {
                backgroundColor: "#000",
              },
            }}
          >
            {confirmText}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
