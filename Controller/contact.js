import contactModal from "../Models/contact.js";


export const addContact = async (req, res) => { 
  const { fulname, email } = req.body;
  console.log(fulname,email)


  try {
    const result = await contactModal.create({ fulname, email });

    res.status(201).json({ success: true, });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
    console.log(error);
  }
};

export const getAllcontact = async ( req,res) => {
    try {
      const users = await contactModal.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  // delete api 
  export const deletecontact = async (req, res) => {
    const id = req.params.id; // Get the ID from URL parameter
    console.log(id);
  
    // Use the ID to delete the record
    let result = await contactModal.deleteOne({ _id: id });
  
    // Send a response to indicate success or failure
    if (result.deletedCount === 1) {
      res.send('Deletion successful');
    } else {
      res.status(404).send('Contact not found');
    }
  };
  
  // update api
  export const updatecontact = async (req, res) => {
    const abc='65374aab1e9618e6de2c3e82'
    // const abc = req.params.id;
    let result = await contactModal.updateOne(
      { _id: req.body },
      { $set: req.body }
    );
  
    res.send(abc);
  };