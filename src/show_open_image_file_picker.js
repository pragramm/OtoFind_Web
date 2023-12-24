function showImageFilePicker() {
    return new Promise((resolve, reject) => {
        const e = document.createElement("input");
        e.type = "file";
        e.multiple = false;
        e.accept = ".jpg,.jpeg,.png,.gif";

        e.addEventListener("change", () => {
            resolve(e.files.length ? e.files[0] : null);
        });
        e.click();
    });
}

export { showImageFilePicker };