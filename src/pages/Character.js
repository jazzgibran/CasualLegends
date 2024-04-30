import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CharacterCreationPage = () => {
  const [showForm, setShowForm] = useState(false); //pop up form state
  const [showModal, setShowModal] = useState(false); // State to control the modal
  const [currentStep, setCurrentStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    race: "",
    class: "",
    background: "",
  });
  const [manualRace, setManualRace] = useState("default")
  const [manualClass, setManualClass] = useState("default")


  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal when closed
  };

  const handleStartForm = () => {
    setShowForm(true); //show pop up
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentStep(1); // Reset current step when closing the form
    setForm({
      name: "",
      race: "",
      class: "",
      background: "",
    }) //set form to empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormEmpty = Object.entries(form).filter(([key, value]) => key == 'background').some(([key, value]) => value === "");
    if (isFormEmpty) {
      setShowModal(true); // Show the modal if form is empty
      return;
    }
    setCurrentStep(currentStep + 1); //to the copy paste   
  };

  const nextStep = (e) => {
    e.preventDefault();
    const isFormEmpty = Object.entries(form).filter(([key, value]) => key !== 'background').some(([key, value]) => value === "");
    if (isFormEmpty) {
      setShowModal(true); // Show the modal if form is empty
      return;
    }
    if(manualRace === ""){
      setShowModal(true); // Show the modal if form is empty
      return;
    }
    if(manualClass === ""){
      setShowModal(true); // Show the modal if form is empty
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen"
    >

      {/* form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="max-w-xl w-11/12 lg:w-full p-8 text-white border-teal-400 border bg-slate-800 shadow-lg rounded-lg">
            {/* Render different steps of the form based on currentStep */}
            {currentStep === 1 && (
              <div>
                <Step1Form nextStep={nextStep} handleClose={handleCloseForm} handleChange={handleChange}
                  setManualRace={setManualRace} setManualClass={setManualClass} manualRace={manualRace}
                  manualClass={manualClass}
                  form={form} />
                {showModal == true && (<EmptyFieldsModal handleClose={handleCloseModal} />)}
              </div>


            )}
            {currentStep === 2 && (
              <div>
                <Step2Form
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  form={form}

                />
                {showModal == true && (<EmptyFieldsModal handleClose={handleCloseModal} />)}
              </div>

            )}
            {currentStep === 3 && (
              <Step3Form
                prevStep={prevStep}
                form={form}
                handleClose={handleCloseForm}
                manualRace={manualRace}
                manualClass={manualClass}
              />
            )}
            {/* Add more steps as needed */}
          </div>
        </motion.div>
      )}

      {/* get start here */}
      <div className="max-w-md w-11/12 md:w-full p-6 border-teal-400 border bg-slate-800 bg-opacity-60 shadow-lg rounded-lg">
        <h1 className="text-2xl text-white font-bold mb-4 text-center">
          Character Creation
        </h1>
        <p className="text-white mb-6 text-center">
          Step-by-step guide on creating a character. Click on Get Started below.
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleStartForm}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Started
          </button>
          <Link
            to="/"
            className="text-sm text-gray-400 hover:underline self-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const EmptyFieldsModal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="max-w-sm w-full p-8 text-white border-teal-400 border bg-slate-800 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Empty Fields</h2>
        <p className="mb-4">Please fill in all fields.</p>
        <button
          onClick={handleClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Step 1 of the form
const Step1Form = ({ nextStep, handleClose, form, manualRace, setManualRace, manualClass, setManualClass, handleChange }) => {
  // Sample race options, you can replace it with your actual race options
  const raceOptions = ["Human", "Elf", "Dwarf", "Orc", "Gnome"];
  const classOptions = ["Fighter", "Wizard", "Sorcerer", "Bard", "Warlock"];

  return (
    <div className="">
      <h2 className="text-lg font-semibold ">Step 1: Basic Information</h2>
      <h5 className=" font-semibold mb-4 ">Fill in your character's name, race, and class.</h5>
      <form className="space-y-4">
        {/* Your form fields for step 1 */}
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="px-3 py-2 mt-1 text-slate-700 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block">Race</label>
          <select
            name="race"
            value={form.race}
            onChange={(e) => {
              handleChange(e);
              if (e.target.value === "Other") {
                setManualRace(""); // Reset manualRace when "Other" is selected
              }
              else{
                setManualRace("default")
              }
            }}
            className="px-3 py-2 mt-1 text-slate-700 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select your race...</option>
            {/* Render race options from array */}
            {raceOptions.map((race, index) => (
              <option key={index} value={race}>
                {race}
              </option>
            ))}
            {/* Option for manual input */}
            <option value="Other">Other (please specify)</option>
          </select>
        </div>
        {/* Additional input field for manual race input */}
        {form.race === "Other" && (
          <div>
            <label className="block">Enter your race</label>
            <input
              type="text"
              value={manualRace}
              onChange={(e) => setManualRace(e.target.value)}
              className="px-3 py-2 mt-1 text-slate-700 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"

            />
          </div>
        )}

        {/* class */}
        <div>
          <label className="block">Class</label>
          <select
            name="class"
            value={form.class}
            onChange={(e) => {
              handleChange(e);
              if (e.target.value === "Other") {
                setManualClass(""); // Reset manualRace when "Other" is selected
              }
              else{
                setManualClass("default")
              }
            }}
            className="px-3 py-2 mt-1 text-slate-700 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            {/* Option for manual input */}
            <option value="">Select your class...</option>
            {/* Render class options from array */}
            {classOptions.map((classes, index) => (
              <option key={index} value={classes}>
                {classes}
              </option>
            ))}
            {/* Option for manual input */}
            <option value="Other">Other (please specify)</option>
          </select>
        </div>
        {/* Additional input field for manual class input */}
        {form.class === "Other" && (
          <div>
            <label className="block">Enter your class</label>
            <input
              type="text"
              value={manualClass}
              onChange={(e) => setManualClass(e.target.value)}
              className="px-3 py-2 mt-1 text-slate-700 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        )}

        {/* button */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={nextStep}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
          <button
            onClick={handleClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};



// Step 2 of the form
const Step2Form = ({ prevStep, handleSubmit, form, handleChange }) => {
  return (
    <>
      <h2 className="text-lg font-semibold">Step 2: Background</h2>
      <h2 className="font-semibold mb-4">Make up your character's background.</h2>
      <form className="space-y-4">
        {/* Your form fields for step 2 */}
        <div>
          <label className="block">Background</label>
          <textarea
            value={form.background}
            onChange={handleChange}
            name="background"
            type="text"
            className="px-3 py-2 mt-1 block w-full rounded text-slate-600 border-gray-300 shadow-sm focus:border-blue-300 focus:ring 
            focus:ring-blue-200 focus:ring-opacity-50"
            rows="10"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const Step3Form = ({ prevStep, handleClose, form, manualRace, manualClass }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Step 3: Copy Paste in Your Game</h2>
      <div className="space-y-4">
        {/* Your form fields for step 3 */}
        <div>
          <label className="block">
            My name is {form.name}, I am a {form.race === 'Other' ? manualRace : form.race} {form.class === 'Other' ? manualClass : form.class}. Here is my background, {form.background}
          </label>
        </div>
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            onClick={handleClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterCreationPage;
