const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Schema/userSchema");
const emailjs = require('@emailjs/nodejs');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://vicky:ASas12.,@cluster0.ud5itus.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(4000, "localhost", () => console.log("connected"))
    })
    .catch((err) => {
        console.log(err);
    })

app.post("/", async (req, res) => {
    console.log("hit")
    let data = req.body;
    try {
        await User.create(data);

        let question = [
            'Email',
            'Full Name',
            'Age',
            'Highest Level of Education',
            'Institute where you completed your highest level of education',
            'What did you study',
            'Do you have any relevant work experience?',
            'What institute did you get admitted to in Canada?',
            'What is your program of study in Canada?',
            'Which country are you applying from?',
            'What are your future goals?',
            'English Scores - Listening',
            'English Scores - Reading',
            'English Scores - Speaking',
            'English Scores - Writing',
            'Did you pay your first year tuition?',
            'How much tuition fee did you pay?',
            'Did you do a GIC?',
            'How much did you pay towards GIC?'
        ]

        // console.log(data);

        let message = "";
        Object.entries(data).map((ele,ind) => {
            message += question[ind] + " :\n" + ele[1] + "\n\n";
        })

        const templateParams = {
            from_name: 'Effizient',
            to_name: data.name,
            message: message,
            to_mail: data.email,
        };

        emailjs
            .send('service_rxq1zxz', 'template_uphwmos', templateParams, {
                publicKey: '0HYulHdaD1mh-5g13',
                privateKey: 'HI7VmCgB0OgyGU5VPriwX',
            })
            .then(
                (response) => {
                    res.json({ status: "ok" });
                },
                (err) => {
                    res.json({ status: "failed" });
                    console.log('FAILED...', err);
                },
            );

    }
    catch (err) {
        res.json({ status: "failed" });
        console.log(err);
    }

})