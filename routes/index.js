const express = require('express');
const router = express.Router();
const projects = require('../data/projects');

router.get('/', (req, res) => {
  const featured = projects.find(p => p.featured) || projects[0];
  res.render('home', { projects, featured });
});

router.get('/project/:slug', (req, res) => {
  const project = projects.find(p => p.slug === req.params.slug);
  if (!project) return res.status(404).send('Project not found');
  const next = projects.find(p => p.slug === project.nextProject) || null;
  res.render('project', { project, next });
});

module.exports = router;
