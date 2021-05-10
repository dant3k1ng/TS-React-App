export const filter = (items: Array<any>, keyToSearch: string, filterText: string) => {
    return items.filter(item => (item[keyToSearch].toLowerCase()).indexOf(filterText.toLowerCase()) !== -1);
} 