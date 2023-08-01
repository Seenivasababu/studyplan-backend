const mongoose = require('mongoose');

const studyPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  goal: {
    type: String,
    required: true,
  },
  specific: {
    type: String,
    required: true,
  },
  measurable: {
    type: String,
    required: true,
  },
  achievable: {
    type: String,
    required: true,
  },
  relevant: {
    type: String,
    required: true,
  },
  timeBound: {
    type: String,
    required: true,
  },
});

const StudyPlan = mongoose.model('StudyPlan', studyPlanSchema);

module.exports = StudyPlan;
