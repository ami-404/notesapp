import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router";
import api from "../lib/axios";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() | !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created succesfully!");
      navigate("/");
    } catch (error) {
      console.error("failed to create Note", error);
      if (error.response.status === 429) {
        toast.error("Slowdown You are creating notes fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note! Please try again later");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Home.
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create a Note</h2>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset mb-4">
                  <legend className="fieldset-legend">Title</legend>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset mb-4">
                  <legend className="fieldset-legend">Content</legend>
                  <textarea
                    placeholder="Write your notes here"
                    className="textarea h-32 w-full"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </fieldset>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating" : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;

// input field

// <div className="form-controle mb-4">
//                   <label className="label">
//                     <span className="label-text">Title</span>
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Note Title"
//                     className="input input-bordered"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </div>
