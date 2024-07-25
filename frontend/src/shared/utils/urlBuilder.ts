const urlBuilder = (base_url: string, path: string, searchParams?: string) => {
    return `${base_url}${path}${searchParams!="" ? `?${searchParams}`:``}` 
}

export default urlBuilder;