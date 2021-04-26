import React from "react";

import "./Upload.css";

const Upload = () => {

    return (
        <React.Fragment>
            <form action="/up1">
                <div className="title">
                    <h1>Upload</h1>
                </div>
                <div className="upload_form">
                    <div className="element">
                        <label className="upload__label" htmlFor="nameofdoc">
                            Name of Document
                        </label>
                        <input
                            id="nameofdoc"
                            name="nameofdoc"
                            placeholder="Name"
                            type="text"
                            className="upload__textbox"
                            required
                        />
                    </div>
                    <div className="element">
                        <label className="upload__label" htmlFor="branch">
                            Branch
                        </label>
                        <select name="branch" id="branch" required>
                            <option disabled selected value="0">Choose Branch</option>
                            <option value="Chemical">Chemical</option>
                            <option value="Chemical">CS</option>
                            <option value="Chemical">ECE</option>
                            <option value="Chemical">EEE</option>
                            <option value="Chemical">IT</option>
                            <option value="Chemical">Mechanical</option>
                            <option value="Chemical">Metallurgy</option>
                            <option value="Chemical">Mining</option>
                        </select>
                    </div>
                    <div className="element">
                        <label className="upload__label" htmlFor="doctype">
                            Document Type
                        </label>
                        <select name="doctype" id="doctype">
                            <option disabled selected value="0">Choose Document Type</option>
                            <option value="PDF">PDF</option>
                            <option value="PPT">PPT</option>
                            <option value="DOCX">Docx</option>
                            <option value="Image">Image</option>
                            <option value="Video">Video</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="element">
                        <label className="upload__label" htmlFor="course">
                            Course
                        </label>
                        <input
                            id="course"
                            name="course"
                            type="text"
                            className="upload__textbox"
                            placeholder="Course Name"
                            required
                        />
                    </div>
                    <div className="element">
                        <label className="upload__label" htmlFor="document">
                            Choose File
                        </label>
                        <input
                            type="file"
                            name="document"
                            id="document"
                            className="document"
                            required
                        />
                    </div>
                    <button className="upload_btn" type="submit">Upload</button>
                </div>
            </form>
        </React.Fragment>
    )
}


export default Upload
