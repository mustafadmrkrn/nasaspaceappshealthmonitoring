/*
 * content.js — explanatory texts shown in the UI.
 *
 * STATUS: DRAFT. These are general, plain-language explanations written for the prototype.
 * They have NOT yet been verified against NASA Human Research Program sources.
 * The UI shows a "draft — not yet source-verified" badge next to them.
 * Replace each `sources: []` with real, checked references before presenting as established fact.
 *
 * Hazard names come from the challenge text (NASA HRP's five hazards of human spaceflight):
 * space radiation, isolation and confinement, distance from Earth, gravity fields,
 * hostile closed environments. The indicator -> hazard mapping below is a PROPOSED mapping.
 */
(function (root) {
  'use strict';

  var REGIONS = {
    mind: {
      title: 'Mind & sleep', indicators: ['sleep', 'mood'],
      blurb: 'Behavioral health: sleep and mood self-reports.',
      hazards: ['Isolation and confinement', 'Hostile closed environment (proposed mapping)']
    },
    heart: {
      title: 'Heart & circulation', indicators: ['hr', 'sys', 'dia'],
      blurb: 'Cardiovascular indicators.',
      hazards: ['Gravity fields (proposed mapping)']
    },
    metabolism: {
      title: 'Metabolism', indicators: ['glucose'],
      blurb: 'Blood glucose as a simple nutrition/metabolism-related indicator.',
      hazards: ['Nutrition (proposed mapping)']
    },
    whole: {
      title: 'Whole body', indicators: ['temp'],
      blurb: 'Body temperature.',
      hazards: ['Hostile closed environment (proposed mapping)']
    },
    bones: {
      title: 'Bones & muscle', indicators: [],
      blurb: 'The challenge lists bone loss as a spaceflight health problem. This prototype has NO bone or muscle indicator yet, so nothing is assessed here.',
      hazards: ['Gravity fields']
    },
    immune: {
      title: 'Immune system', indicators: [],
      blurb: 'The challenge lists immune changes as a spaceflight health problem. This prototype has NO immune indicator yet, so nothing is assessed here.',
      hazards: ['Space radiation', 'Isolation and confinement']
    }
  };

  var INFO = {
    hr: {
      why: 'Resting heart rate is a simple cardiovascular indicator. Many factors can change it (fitness, stress, sleep, illness), so this app compares you with your own usual values.',
      how: 'Measure after resting quietly, at a similar time of day each time, with the same device.'
    },
    sys: {
      why: 'Blood pressure is a basic cardiovascular indicator. It varies during the day, so repeat measurements under similar conditions.',
      how: 'Rest seated first. Use the same arm and the same device each time. Record systolic and diastolic in mmHg.'
    },
    dia: {
      why: 'The lower blood-pressure number. Interpreted together with systolic pressure.',
      how: 'Measured together with systolic pressure.'
    },
    glucose: {
      why: 'Blood glucose in mg/dL is one of the example indicators in the challenge. It depends strongly on when you last ate.',
      how: 'Use the mission-approved device. Measure under similar conditions each time (for example before a meal).'
    },
    temp: {
      why: 'Body temperature is a quick general indicator that something may be changing.',
      how: 'Use the same type of thermometer and the same body site each time.'
    },
    sleep: {
      why: 'Sleep duration is a simple behavioral-health indicator. Changes from your usual pattern are worth noticing.',
      how: 'Enter the hours you slept last night (a wearable or your own estimate).'
    },
    mood: {
      why: 'A quick self-rating (1 = very low, 5 = very good). It is NOT a validated psychological instrument.',
      how: 'Rate how you feel today on the 1–5 scale. Be consistent in how you use the scale.'
    }
  };

  var MESSAGES = {
    ok: 'Within your usual range for the readings available.',
    watch: 'Noticeable statistical change from your own baseline. Keep measuring and keep an eye on it.',
    attention: 'Large statistical change from your own baseline. This is NOT a diagnosis. Consider discussing it with the flight surgeon following mission procedures.',
    nodata: 'Not enough data to judge. This is NOT the same as "everything is fine".'
  };

  var api = { REGIONS: REGIONS, INFO: INFO, MESSAGES: MESSAGES };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Content = api;
})(typeof window !== 'undefined' ? window : globalThis);
