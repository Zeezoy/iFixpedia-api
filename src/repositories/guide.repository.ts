import pool from "../config/db.js";

export const findAll = async () => {
    const result = await pool.query("SELECT * FROM guides");

    return result.rows;
};

export const findById = async (id:number) => {
    const result = await pool.query("SELECT * FROM guides where id = $1", [id]);

    return result.rows[0]; 
};