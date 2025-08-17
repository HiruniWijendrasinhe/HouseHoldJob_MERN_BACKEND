import Adder from "../Models/Adder.js";

export const updateAdder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNo, age } = req.body;

    if (!name || !address || !phoneNo || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedRecord = await Adder.findByIdAndUpdate(
      id,
      {
        Name: name,
        Address: address,
        PhoneNo: phoneNo,
        Age: age
      },
      { new: true } // return the updated document
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({
      message: "Adder record updated successfully",
      record: updatedRecord
    });

  } catch (error) {
    console.error("Error updating adder record:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
