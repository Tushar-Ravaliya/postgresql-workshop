import express from "express";
import supabase from "./db/supabaseClient.js";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  const { data, error } = await supabase
    .from("Users")
    .insert([{ name, email }])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export default app;
