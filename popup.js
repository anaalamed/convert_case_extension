console.log("This is a convert extension!");

$("body").on("click", "button#convert", function(event){
    event.preventDefault();
    console.log("converting...");

    let text = $(".field_wrapper #camelCase").val();
    console.log(text);

    if (text.includes(" ")) {
        $(".input_validations").text("Only one word is permitted!");
    } else {
        const camelToSnakeCase = text.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        console.log(camelToSnakeCase);
        $(".field_wrapper #snake_case").text(camelToSnakeCase);

        // copy to clipboard
        navigator.clipboard.writeText(camelToSnakeCase).then(() => {
            $(".output_copy").removeClass("hidden")
        });
    }


})