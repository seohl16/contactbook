/*
app.get('/', function(req, res){
	res.redirect('/contacts');
  });
  // Contacts - Index // 7
  app.get('/contacts', function(req, res){
	Contact.find({}, function(err, contacts){
	  if(err) return res.json(err);
	  res.render('contacts/index', {contacts:contacts});
	});
  });
  // Contacts - New // 8
  app.get('/contacts/new', function(req, res){
	res.render('contacts/new');
  });
  // Contacts - create // 9
  app.post('/contacts', function(req, res){
	Contact.create(req.body, function(err, contact){
	  if(err) return res.json(err);
	  res.redirect('/contacts');
	});
  });
  
  // Contacts - show // 3
  app.get('/contacts/:id', function(req, res){
	Contact.findOne({_id:req.params.id}, function(err, contact){
	  if(err) return res.json(err);
	  res.render('contacts/show', {contact:contact});
	});
  });
  // Contacts - edit // 4
  app.get('/contacts/:id/edit', function(req, res){
	Contact.findOne({_id:req.params.id}, function(err, contact){
	  if(err) return res.json(err);
	  res.render('contacts/edit', {contact:contact});
	});
  });
  // Contacts - update // 5
  app.put('/contacts/:id', function(req, res){
	Contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
	  if(err) return res.json(err);
	  res.redirect('/contacts/'+req.params.id);
	});
  });
  // Contacts - destroy // 6
  app.delete('/contacts/:id', function(req, res){
	Contact.deleteOne({_id:req.params.id}, function(err){
	  if(err) return res.json(err);
	  res.redirect('/contacts');
	});
  });
  */