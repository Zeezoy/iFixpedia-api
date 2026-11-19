import pool from "../config/db.js";

export const findAll = async () => {
    const result = await pool.query("SELECT * FROM guides");

    return result.rows;
};

export const findById = async (id:number) => {
    const result = await pool.query("SELECT * FROM guides where id = $1", [id]);

    return result.rows[0]; 
};

export const create = async(title: string, category:string) => {
    const result = await pool.query("INSERT INTO guides (title, category) VALUES ($1, $2)  RETURNING *", [title, category], );

    return result.rows[0];
}