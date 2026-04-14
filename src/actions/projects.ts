"use server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export interface CustomProject {
  id?: string;
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  images: string[];
  liveLink?: string;
  repoLink?: string;
}

const DB_NAME = "portfolio";
const COLLECTION_NAME = "projects";

export async function getProjects() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const projects = await db.collection(COLLECTION_NAME).find({}).toArray();

    return projects.map((p) => ({
      id: p._id.toString(),
      title: p.title,
      description: p.description,
      tags: p.tags,
      status: p.status,
      images: p.images,
      liveLink: p.liveLink,
      repoLink: p.repoLink,
    }));
  } catch (e) {
    console.error("Error fetching projects from MongoDB:", e);
    return null;
  }
}

export async function addProject(project: Omit<CustomProject, "id" | "_id">) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const result = await db.collection(COLLECTION_NAME).insertOne(project);
    return { success: true, id: result.insertedId.toString() };
  } catch (e) {
    console.error("Error inserting project to MongoDB:", e);
    return { success: false, error: "Failed to insert" };
  }
}

export async function updateProject(id: string, project: Omit<CustomProject, "id" | "_id">) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    await db.collection(COLLECTION_NAME).updateOne(
      { _id: new ObjectId(id) },
      { $set: project }
    );
    return { success: true };
  } catch (e) {
    console.error("Error updating project in MongoDB:", e);
    return { success: false, error: "Failed to update" };
  }
}

export async function deleteProject(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(id) });
    return { success: true };
  } catch (e) {
    console.error("Error deleting project from MongoDB:", e);
    return { success: false, error: "Failed to delete" };
  }
}
