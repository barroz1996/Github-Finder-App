import { useEffect, useContext } from 'react'
import GithubContext from "../../context/github/GithubContext"
import { useParams } from 'react-router-dom'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'



function User() {
  const { getUser, user , loading} = useContext(GithubContext)
  const params = useParams()
  useEffect(() => {
    getUser(params.login)
  }, [])

  

  return <div>{user.login}</div>
}

export default User