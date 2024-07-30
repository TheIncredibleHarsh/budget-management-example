import { useEffect, useState } from "react";
import Icon from "../../../../shared/components/Icon";
import useUserProfileApi from "../../../../shared/hooks/useUserProfileApi";
import { ProfileContainer, ImageContainer, ProfileSection, ProfileText, ProfileTextSpan, ProfileTextSubText, ProfileInfoItem, ProfileItemLabel, ProfileItemText, EditButton, EditInput } from "./Styles";
// import { useLocation } from "react-router-dom";
import { TUserProfile } from "../../../../shared/types";
import { useLoading } from "../../../../shared/hooks/useLoading";

const ProfileSettings = () => {
    const [userProfile, setUserProfile] = useState<TUserProfile>()
    const [edit, setEdit] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const {fetchUserProfile, updateUserProfile} = useUserProfileApi()
    const {setLoading} = useLoading()
    // const location = useLocation

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if(userId){
            fetchUserProfile(parseInt(userId)).then(result => {
                setUserProfile(result)
            })
        }
    }, [])

    useEffect(() => {
        if(edit){
            let newProfile: TUserProfile = {
                id: userProfile?.id,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: userProfile?.email
            }
            setUserProfile(newProfile)
        }
    },[firstName, lastName, phoneNumber])

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleUpdate = () => {
        setLoading(true)
        if(userProfile){
            console.log(userProfile)
            const result = updateUserProfile(userProfile).then(result => {
                setLoading(false)
                return result
            })
        }
        
        setEdit(!edit)
    }

    return (
        <ProfileContainer>
            <ProfileSection>
                <ImageContainer><Icon type="account" size={200} color="#57606a"/></ImageContainer>
                <ProfileText>
                    <ProfileTextSpan>{`${userProfile?.firstName || "-"} ${userProfile?.lastName || "-"}`}</ProfileTextSpan>
                    <ProfileTextSubText>{`${"Software Engineer"}`}</ProfileTextSubText>
                    <ProfileTextSubText>{`${"India"}`}</ProfileTextSubText>
                </ProfileText>
            </ProfileSection>
            <ProfileSection>
                <ProfileInfoItem>
                    <ProfileItemLabel>{`${"First Name"}`}</ProfileItemLabel>
                    {
                        edit ?
                        <EditInput defaultValue={userProfile?.firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                        :
                        <ProfileItemText>{`${userProfile?.firstName || "-"}`}</ProfileItemText>
                    }
                </ProfileInfoItem>
                <ProfileInfoItem>
                    <ProfileItemLabel>{`${"Last Name"}`}</ProfileItemLabel>
                    {
                        edit ?
                        <EditInput value={userProfile?.lastName} onChange={(e) => setLastName(e.target.value)}/>
                        :
                        <ProfileItemText>{`${userProfile?.lastName || "-"}`}</ProfileItemText>
                    }
                </ProfileInfoItem>
                <ProfileInfoItem>
                    <ProfileItemLabel>{`${"Email"}`}</ProfileItemLabel>
                    <ProfileItemText>{`${userProfile?.email || "-"}`}</ProfileItemText>
                </ProfileInfoItem>
                <ProfileInfoItem>
                    <ProfileItemLabel>{`${"Phone Number"}`}</ProfileItemLabel>
                    {
                        edit ?
                        <EditInput value={userProfile?.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                        :
                        <ProfileItemText>{`${userProfile?.phoneNumber || "-"}`}</ProfileItemText>
                    }
                </ProfileInfoItem>
                <ProfileInfoItem>
                    <ProfileItemLabel>{`${"Designation"}`}</ProfileItemLabel>
                    <ProfileItemText>{`${"Software Engineer"}`}</ProfileItemText>
                </ProfileInfoItem>
                <ProfileInfoItem>
                    <ProfileItemLabel>{`${"Location"}`}</ProfileItemLabel>
                    <ProfileItemText>{`${"India"}`}</ProfileItemText>
                </ProfileInfoItem>
                <EditButton onClick={edit ? handleUpdate : handleEdit}>
                    <ProfileItemText>{`${edit ? "Update" : "Edit"}`}</ProfileItemText>
                    <Icon type="edit" size={20} color="#57606a"/>    
                </EditButton>
            </ProfileSection>
        </ProfileContainer>
    )
}

export default ProfileSettings;