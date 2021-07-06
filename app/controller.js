const { saveCallId, getCallId } = require('./model')
/* eslint-disable linebreak-style */
exports.saveCallId = async (req, res, next) => {
  try {
    const { id, signalData } = req.body;
    await saveCallId(id, signalData);
    res.status(200).send(true);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getCallId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const code = await getCallId(id);
    res.status(200).send(code);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
