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

const deleteUserdb = async (userId) => {
  const { data, error } = await supabase
    .from("Users")
    .delete()
    .eq("id", userId);

  if (error) throw error;
  return data;
};

const updateUserdb = async (userId, updatedData) => {
  const { data, error } = await supabase
    .from("Users")
    .update(updatedData)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export { findUserByEmail, createUser, deleteUserdb, updateUserdb };
