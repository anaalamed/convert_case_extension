console.log("This is a convert extension!");



$(document).ready( function(){
    handleMenuClick();
    convertCamelToSnake();
    convertSnakeToCamel();
})

const handleMenuClick = () => {
    $("body").on("click", ".menu_wrapper .camel_to_snake", function(event){
        event.preventDefault();
    
        $(".menu_wrapper .snake_to_camel").removeClass("active");
        $(".menu_wrapper .camel_to_snake").addClass("active");
    
        $("form.snake_to_camel").addClass("hidden");
        $("form.camel_to_snake").removeClass("hidden");

        clearAllData();
    })
    
    $("body").on("click", ".menu_wrapper .snake_to_camel", function(event){
        event.preventDefault();
    
        $(".menu_wrapper .camel_to_snake").removeClass("active");
        $(".menu_wrapper .snake_to_camel").addClass("active");
    
        $("form.snake_to_camel").removeClass("hidden");
        $("form.camel_to_snake").addClass("hidden");

        clearAllData();
    })
}

const convertCamelToSnake = () => {
    $("body").on("click", ".camel_to_snake button#convert", function(event){
        event.preventDefault();
    
        let text = $("form.camel_to_snake .field_wrapper #camel_case").val();
        console.log(text);
    
        if (text.includes(" ")) {
            validateInput();
        } else {
            const camelToSnakeCase = text.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
            $(".field_wrapper #snake_case").text(camelToSnakeCase);
    
            copyToClipboard(camelToSnakeCase);
        }
    })
}

const convertSnakeToCamel= () => {
    $("body").on("click", ".snake_to_camel button#convert", function(event){
        event.preventDefault();
    
        let text = $("form.snake_to_camel .field_wrapper #snake_case").val();
        console.log(text);
    
        if (text.includes(" ")) {
            validateInput();
        } else {
            const snakeTocamel_case = text.replace(/(_\w)/g, k => k[1].toUpperCase())
            $(".field_wrapper #camel_case").text(snakeTocamel_case);
    
            copyToClipboard(snakeTocamel_case);
        }
    })
}

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        $("form .output_copy").removeClass("hidden");
    });
}

const clearAllData = () => {
    $("form.camel_to_snake .field_wrapper #camel_case").val("");
    $("form.camel_to_snake .field_wrapper #snake_case").text("");

    $("form.snake_to_camel .field_wrapper #snake_case").val("");
    $("form.snake_to_camel .field_wrapper #camel_case").text("");

    $("form .input_validations").addClass("hidden");
    $("form .output_copy").addClass("hidden");
}

const validateInput = () => {
    $("form .input_validations").removeClass("hidden");

    $("form .field_wrapper input").on("input", function(){
        $("form .input_validations").addClass("hidden");
    })
}