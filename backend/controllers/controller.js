let postRegisterInstitute = (req,res) =>{
    // output everything that has reached here !
    console.log(req.body)
    res.status(202).json({message: "we got your data successfully !"})
}

export {postRegisterInstitute}