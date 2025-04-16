function make_checklist() {
    let checklist : boolean[] = []
    for (let i = 0; i < 26; i++) {
        checklist.push(!(!(i == 0) && (checklist[i - 1] || checklist[i - 3] || checklist[i - 4])))
    }
}

