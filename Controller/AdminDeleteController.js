import Adder from "../Models/Adder.js";

export const deleteAdder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRecord = await Adder.findByIdAndDelete(id);

    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({
      message: "Adder record deleted successfully",
      record: deletedRecord
    });

  } catch (error) {
    console.error("Error deleting adder record:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
