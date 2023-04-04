console.log("This is a convert extension!");

$("#convert").on("click", () => {
    console.log("converting...");

    let text = $(".field_wrapper #camelCase").val();
    console.log(text);

    if (text.includes(" ")) {
        $(".input_validations").text("Only one word is permitted!");
    } else {
        const camelToSnakeCase = text.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    console.log(camelToSnakeCase);

    $(".field_wrapper #snake_case").text(camelToSnakeCase);
    }

})