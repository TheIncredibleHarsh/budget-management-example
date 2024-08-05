import { Menu, MenuItem, Select } from "@mui/material";
import Button from "../../../../shared/components/Button";
import { AppSettingsContainer, ListDeleteIcon, ListDisplay, ListItem, ListItemText, SectionHeader, SectionHeaderText, SettingsAction, SettingsActionSubText, SettingsActionText, SettingsData, SettingsSection, SettingsSubSection, TagsContainer } from "./Styles";
import Icon from "../../../../shared/components/Icon";
import { Tag } from "../../../../shared/StyledComponents/styles";
import { FormFieldInput } from "../../../../shared/components/FormField/styles";
import useAppSettingsApi from "../../../../shared/hooks/useAppSettingsApi";
import { useEffect, useState } from "react";

type Category = {
    id: string,
    name: string
};

type Tag = {
    id: string,
    name: string
};

const AppSettings = () => {
    const {getAppSettings, updateCurrency, createCategory, deleteCategory, createTag, deleteTag} = useAppSettingsApi()
    const [categories, setCategories] = useState<Category[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const [currency, setCurrency] = useState<string>("")
    const [isLoading, setLoading] = useState<boolean>(false)
    const [newCategoryName, setNewCategoryName] = useState<string>("")
    const [newTagName, setNewTagName] = useState<string>("")

    useEffect(() => {
        setLoading(true)
        fetchAppSettings().then(() => {
            setLoading(false)
        })
    }, [])

    // useEffect(() => {
    //     console.log(categories)
    // }, [categories])

    const fetchAppSettings = async () => {
        setLoading(true)
        const response = await getAppSettings();
        setCurrency(response.currency)
        setCategories(response.categories)
        setTags(response.tags)
        setLoading(false)
    }

    const handleCurrencyChange = (event: any) => {
        updateCurrency(event.target.value)
        setCurrency(event.target.value)
        fetchAppSettings()
    }

    const handleCategoryCreate = () => {
        createCategory(newCategoryName).then(response => {
            setCategories([...categories, response])
        }).then(() => {
            setNewCategoryName("")
            fetchAppSettings()
        })
    }

    const handleTagCreate = () => {
        createTag(newTagName).then(response => {
            setTags([...tags, response])
        }).then(() => {
            setNewTagName("")
            fetchAppSettings()
        })
    }
    
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
                    </SettingsAction>
                    <SettingsData>
                        <Select size="small" value={currency} onChange={handleCurrencyChange}>{['INR', 'USD', 'EUR'].map(currency => <MenuItem value={currency}>{currency}</MenuItem>)}</Select>
                    </SettingsData>
                </SettingsSubSection>
                <SettingsSubSection>
                    <SettingsAction>
                        <SettingsActionText>{`${"Categories"}`}</SettingsActionText>
                        <SettingsActionSubText>{`${"Add, edit or delete categories"}`}</SettingsActionSubText>
                        <FormFieldInput placeholder="Enter category name" type="text" size={160} onChange={(event) => setNewCategoryName(event.target.value)}></FormFieldInput>
                        <Button type="success" value={`${"Add Category"}`} size={160} handleOnClick={handleCategoryCreate}></Button>
                    </SettingsAction>
                    <SettingsData>
                        <CategoryListDisplay items={categories} />
                    </SettingsData>
                </SettingsSubSection>
                <SettingsSubSection>
                    <SettingsAction>
                        <SettingsActionText>{`${"Tags"}`}</SettingsActionText>
                        <SettingsActionSubText>{`${"Add, edit or delete tags"}`}</SettingsActionSubText>
                        <FormFieldInput placeholder="Enter tag name" type="text" size={160} onChange={(event) => setNewTagName(event.target.value)}></FormFieldInput>
                        <Button type="success" value={`${"Add Tag"}`} size={160} handleOnClick={handleTagCreate}></Button>
                    </SettingsAction>
                    <SettingsData>
                        <TagsContainer>
                            <TagListDisplay items={tags} />
                        </TagsContainer>
                    </SettingsData>
                </SettingsSubSection>  
            </SettingsSection>
        </AppSettingsContainer>
    )
}

const CategoryListDisplay = ({items}: {items: Category[]}) => {
    return <ListDisplay>{items.map(item => <ListItem><ListItemText>{`${item.name}`}</ListItemText><ListDeleteIcon><Icon type="delete" color="red" size={12}></Icon></ListDeleteIcon></ListItem>)}</ListDisplay>
}

const TagListDisplay = ({items}: {items: Tag[]}) => {
    return <TagsContainer>{items.map(item => <Tag>{`${item.name}`}</Tag>)}</TagsContainer>
}

export default AppSettings;