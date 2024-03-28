import { Axios } from "../Api/Axios"



const ReclamationApi = {
  login: async (email, password) => {
    return await Axios.post('/login', {email, password})
  },
  logout: async () => {
    return await Axios.post('/logout')
  },
  getUser: async () => {
    return await Axios.get('/api/user')
  },
  getReclamation: async (id) => {
    return await Axios.get(`/api/reclamations/${id}`)
  },
  editReclamation:async(id,values)=>{
    return await Axios.put(`/api/reclamations/${id}`,values)
  },
  editobservation:async(id,values)=>{
    return await Axios.put(`/api/observations/${id}`,values)
  },
  editsuggetion:async(id,values)=>{
    return await Axios.put(`/api/suggetions/${id}`,values)
  },
  editclient:async(id,values)=>{
    return await Axios.put(`/api/clients/${id}`,values)
  },
  getobservation: async (id) => {
    return await Axios.get(`/api/observations/${id}`)
  },
  getsuggetion: async (id) => {
    return await Axios.get(`/api/suggetions/${id}`)
  },
  deleteReclamation:async (id)=>{
    return await Axios.delete(`/api/reclamations/${id}`)
  },
  deleteObservation:async (id)=>{
    return await Axios.delete(`/api/observations/${id}`)
  },
  deleteSuggestion:async (id)=>{
    return await Axios.delete(`/api/suggetions/${id}`)
  }

}
export default ReclamationApi