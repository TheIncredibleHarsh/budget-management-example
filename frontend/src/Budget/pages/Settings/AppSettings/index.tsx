import { Menu, MenuItem, Select } from "@mui/material";
import Button from "../../../../shared/components/Button";
import { AppSettingsContainer, ListDeleteIcon, ListDisplay, ListItem, ListItemText, SectionHeader, SectionHeaderText, SettingsAction, SettingsActionSubText, SettingsActionText, SettingsData, SettingsSection, SettingsSubSection, TagsContainer } from "./Styles";
import Icon from "../../../../shared/components/Icon";
import { Tag } from "../../../../shared/StyledComponents/styles";

const AppSettings = () => {
    return (
        <AppSettingsContainer>
            <SectionHeader>
                <SectionHeaderText>{`${"App Settings"}`}</SectionHeaderText>
            </SectionHeader>
            <SettingsSection>
                <SettingsSubSection>
                    <SettingsAction>
                        <SettingsActionText>{`${"Currency"}`}</SettingsActionText>
                        <SettingsActionSubText>{`${"Change the currency"}`}</SettingsActionSubText>
                        {/* <Button type="success" value={`${"Change Currency"}`} size={175}></Button> */}
                    </SettingsAction>
                    <SettingsData>
                        <Select size="small">{['INR', 'USD', 'EUR'].map(currency => <MenuItem value={currency}>{currency}</MenuItem>)}</Select>
                    </SettingsData>
                </SettingsSubSection>
                <SettingsSubSection>
                    <SettingsAction>
                        <SettingsActionText>{`${"Categories"}`}</SettingsActionText>
                        <SettingsActionSubText>{`${"Add, edit or delete categories"}`}</SettingsActionSubText>
                        <Button type="success" value={`${"Add Category"}`} size={160}></Button>
                    </SettingsAction>
                    <SettingsData>
                        <ListDisplay>
                            <ListItem><ListItemText>{`${"Category 1"}`}</ListItemText><ListDeleteIcon><Icon type="delete" color="red" size={12}></Icon></ListDeleteIcon></ListItem>
                            <ListItem><ListItemText>{`${"Category 2"}`}</ListItemText><ListDeleteIcon><Icon type="delete" color="red" size={12}></Icon></ListDeleteIcon></ListItem>
                            <ListItem><ListItemText>{`${"Category 3"}`}</ListItemText><ListDeleteIcon><Icon type="delete" color="red" size={12}></Icon></ListDeleteIcon></ListItem>
                        </ListDisplay>
                    </SettingsData>
                </SettingsSubSection>
                <SettingsSubSection>
                    <SettingsAction>
                        <SettingsActionText>{`${"Tags"}`}</SettingsActionText>
                        <SettingsActionSubText>{`${"Add, edit or delete tags"}`}</SettingsActionSubText>
                        <Button type="success" value={`${"Add Tag"}`} size={160}></Button>
                    </SettingsAction>
                    <SettingsData>
                        <TagsContainer>
                            <Tag>{`${"Tag 1"}`}</Tag>
                            <Tag>{`${"Tag 2"}`}</Tag>
                            <Tag>{`${"Tag 3"}`}</Tag>
                        </TagsContainer>
                    </SettingsData>
                </SettingsSubSection>  
            </SettingsSection>
        </AppSettingsContainer>
    )
}

export default AppSettings;