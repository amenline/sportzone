const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied'});
  }

  try {    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
  
    // Add user from payload
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Unable to authorize user'})
  }
}

module.exports = authorization;