import supabase from "../db/supabaseClient.js";

const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) return null;
  return data;
};

const createUser = async (userData) => {
  const { data, error } = await supabase
    .from("Users")
    .insert([userData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export { findUserByEmail, createUser };
