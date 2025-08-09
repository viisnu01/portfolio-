
document.addEventListener('DOMContentLoaded', function() {
    const text = "Electronics & Communication Engineer | Robotics Enthusiast";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();
});
