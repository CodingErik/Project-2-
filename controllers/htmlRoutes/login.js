const router = require("express").Router(); 
const path = require('path'); 

// we need to require the models in here 

// If no API or html routes are hit send to 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});



// // get all invitation information , route => ('api/invitation')
// router.get('/', function (req, res) {
//   db.Invitation.findAll({}).then(function (dbInvitation) {
//     res.json(dbInvitation);
//   });
// });

// // post a user , route => ('api/invitation')
// router.post('/', function (req, res) {
//   db.Invitation.create({
//     status: req.body.status,
//   }).then(function (dbCreateInvitation) {
//     res.json(dbCreateInvitation);
//   });
// });

// // update user by id , route => ('api/invitation/:id')
// router.put('/:id', function (req, res) {
//   db.Invitation.update(
//     {
//       status: req.body.status,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     },
//   ).then(function (dbUpdateInvitation) {
//     res.json(dbUpdateInvitation);
//   });
// });

// // delete user by id , route => ('api/invitation/:id')
// router.delete('/:id', function (req, res) {
//   db.Invitation.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then(function (dbInvitationDelete) {
//     res.json(dbInvitationDelete);
//   });
// });

module.exports = router;