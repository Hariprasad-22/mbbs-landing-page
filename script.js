document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (name === "" || email === "" || phone === "" || country === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you! We will contact you soon.");
        document.getElementById("leadForm").reset();
    }
});

    document.getElementById("applyNowBtn").addEventListener("click", function () {
        document.getElementById("leadForm").scrollIntoView({ behavior: "smooth" });
    });

    window.onload = function () {
        // Google Analytics tracking
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
        ga('create', 'UA-XXXXXXXXX-X', 'auto'); // Replace with the tracking ID
        ga('send', 'pageview');
    };
    
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID'); 
    fbq('track', 'PageView');


    <img height="1" width="1" style="display:none" 
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>



