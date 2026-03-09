"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        py: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 500,
          color: "#333",
          textTransform: "lowercase",
        }}
      >
        welcome back
      </Typography>

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 335,
          p: 3,
          borderRadius: 2,
          bgcolor: "#e8e8e8",
        }}
      >
        <Typography
          component="label"
          htmlFor="email-input"
          variant="body2"
          sx={{
            display: "block",
            mb: 0.5,
            color: "#333",
            textTransform: "lowercase",
          }}
        >
          email
        </Typography>
        <TextField
          id="email-input"
          fullWidth
          placeholder="namename@gmail.com"
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              bgcolor: "#f5f5f5",
              "& fieldset": {
                borderStyle: "dashed",
                borderColor: "#ccc",
              },
            },
          }}
        />

        <Typography
          component="label"
          htmlFor="password-input"
          variant="body2"
          sx={{
            display: "block",
            mb: 0.5,
            color: "#333",
            textTransform: "lowercase",
          }}
        >
          password
        </Typography>
        <TextField
          id="password-input"
          fullWidth
          type={showPassword ? "text" : "password"}
          placeholder="•••••••••••••"
          variant="outlined"
          sx={{
            mb: 1,
            "& .MuiOutlinedInput-root": {
              bgcolor: "#f5f5f5",
              "& fieldset": {
                borderStyle: "dashed",
                borderColor: "#ccc",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <VisibilityIcon fontSize="small" />
                  ) : (
                    <VisibilityOffIcon fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Link
          component="button"
          variant="body2"
          sx={{
            display: "block",
            mb: 2,
            color: "#888",
            textTransform: "lowercase",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          forgot password?
        </Link>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            py: 1.5,
            bgcolor: "#fff",
            borderColor: "#ccc",
            color: "#333",
            textTransform: "lowercase",
            "&:hover": {
              bgcolor: "#f5f5f5",
              borderColor: "#aaa",
            },
          }}
        >
          login
        </Button>
      </Paper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          my: 3,
          alignSelf: "stretch",
          width: "100%",
          px: 2,
          boxSizing: "border-box",
        }}
      >
        <Divider
          sx={{
            flex: 1,
            borderWidth: "1px",
            borderStyle: "dashed",
            opacity: 1,
          }}
        />
        <Typography
          variant="body2"
          sx={{ px: 2, color: "#666", textTransform: "lowercase", flexShrink: 0 }}
        >
          or sign up with
        </Typography>
        <Divider
          sx={{
            flex: 1,
            borderWidth: "1px",
            borderStyle: "dashed",
            opacity: 1,
          }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton
          sx={{
            width: 55,
            height: 55,
            opacity: 1,
            borderRadius: "10px",
            bgcolor: "#9e9e9e",
            color: "#fff",
            "&:hover": { bgcolor: "#757575" },
          }}
        >
          <GoogleIcon />
        </IconButton>
        <IconButton
          sx={{
            width: 55,
            height: 55,
            opacity: 1,
            borderRadius: "10px",
            bgcolor: "#9e9e9e",
            color: "#fff",
            "&:hover": { bgcolor: "#757575" },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            width: 55,
            height: 55,
            opacity: 1,
            borderRadius: "10px",
            bgcolor: "#9e9e9e",
            color: "#fff",
            "&:hover": { bgcolor: "#757575" },
          }}
        >
          <AppleIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
