const express = require('express');
const StudyPlan = require('../models/StudyPlan');

const router = express.Router();

// Endpoint: /api/study-plans (GET)
router.get('/study-plans', async (req, res) => {
  try {
    const studyPlans = await StudyPlan.find();
    res.json(studyPlans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study plans.' });
  }
});

// Endpoint: /api/study-plans (POST)
router.post('/study-plans', async (req, res) => {
  const { user, goal, specific, measurable, achievable, relevant, timeBound } = req.body;

  try {
    const newStudyPlan = await StudyPlan.create({
      user,
      goal,
      specific,
      measurable,
      achievable,
      relevant,
      timeBound,
    });
    res.status(201).json(newStudyPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating study plan.' });
  }
});

// Endpoint: /api/study-plans/:id (GET)
router.get('/study-plans/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const studyPlan = await StudyPlan.findById(id);
    if (!studyPlan) {
      return res.status(404).json({ message: 'Study plan not found.' });
    }
    res.json(studyPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study plan.' });
  }
});

// Endpoint: /api/study-plans/:id (PUT)
router.put('/study-plans/:id', async (req, res) => {
  const { id } = req.params;
  const { goal, specific, measurable, achievable, relevant, timeBound } = req.body;

  try {
    const updatedStudyPlan = await StudyPlan.findByIdAndUpdate(
      id,
      { goal, specific, measurable, achievable, relevant, timeBound },
      { new: true }
    );
    if (!updatedStudyPlan) {
      return res.status(404).json({ message: 'Study plan not found.' });
    }
    res.json(updatedStudyPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error updating study plan.' });
  }
});

// Endpoint: /api/study-plans/:id (DELETE)
router.delete('/study-plans/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudyPlan = await StudyPlan.findByIdAndRemove(id);
    if (!deletedStudyPlan) {
      return res.status(404).json({ message: 'Study plan not found.' });
    }
    res.json(deletedStudyPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting study plan.' });
  }
});

module.exports = router;
