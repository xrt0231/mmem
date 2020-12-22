require('dotenv').config();
const Dashboard = require('../models/dashboard_model');

// const getDashboard = async (req, res) => {
//     let dateStart = req.body.dateStart;
//     let dateEnd = req.body.dateEnd;
//     let process = req.body.process;

//     const dashboardDailyEfficiency = (await Dashboard.getDailiEfficiency(dateStart, dateEnd, process));
//     console.log(dashboardDailyEfficiency);
//     res.status(200).send({data: dashboardDailyEfficiency});
// };

const dashboard1 = async (req, res)=> {

    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let recordProcess = req.body.recordProcess;
    
    const dashboard1 = (await Dashboard.dashboard1(recordProcess, startDate, endDate));
    res.send(dashboard1); 
}

const dashboard2 = async (req, res)=> {

    let startDate = req.body.startDate;
    console.log(startDate);
    const dashboard2 = (await Dashboard.dashboard2(startDate));
    res.send(dashboard2); 
}

module.exports = {
    // getDashboard,
    dashboard1,
    dashboard2
};