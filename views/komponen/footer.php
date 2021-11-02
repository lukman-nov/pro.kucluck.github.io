<footer class="footer">
    <div class="container-fot">
        <div class="row">
            <div class="footer-col">
                <h4>Kucluck Bot</h4>
                <ul>
                    <li><a href="../pages/docs.php" title="Quickstart">Quickstart</a></li>
                    <li><a href="https://kucluck.com/addbot" target="_blank" rel="nofollow" title="Add to Server">Add to server</a></li>
                    <li><a href="https://kucluck.com/joinserver" target="_blank" rel="nofollow" title="Discord Channel">Discord channel</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Sosial Media</h4>
                <ul>
                    <li><a href="https://web.facebook.com/lukman.now" target="_blank" rel="nofollow" title="Facebook">Facebook</a></li>
                    <li><a href="https://www.instagram.com/lukman_nov/" target="_blank" rel="nofollow" title="Instagram">Instagram</a></li>
                    <li><a href="https://www.youtube.com/channel/lukmannovawiyadi" target="_blank" rel="nofollow" title="Youtube">Youtube</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="./disclaimer.php" title="Disclaimer">Disclaimer</a></li>
                    <li><a href="./tos.php" title="Terms of Service">Terms of Service</a></li>
                    <li><a href="./policy.php" title="Privacy Policy">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="footer-col-right">
                <h4>Kucluck<small>™</small></h4>
                <p>Bot Discord serba guna yang gratis dan berkualitas untuk server Discord kalian.</p>
                <p><small>copyright &copy; 2021 <a href="#" style="color: #c5c5c5">kucluck.com</a>
                        | Designed by <a href="https://web.facebook.com/lukman.now" target="_blank" rel="nofollow" style="color: #c5c5c5">Lukman Novawiyadi</a></small></p>
            </div>
        </div>
    </div>
</footer>

<style>
    /** FOOTER **/

.container-fot{
    max-width: 1300px;
    margin: auto;
}
.row{
    width:100%;
    padding: 1%;
    margin: auto;
    display: flex;
	flex-wrap: wrap;
}
footer{
    background-color: #24262b;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
	transform: translate(-0%,-0%);
    margin: 300px 0px 0px 0px;
}
.footer-col{
    width: 250px;
    padding: 15px;

}
.footer-col h4{
	font-size: 20px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #7747b6;
	height: 2px;
	box-sizing: border-box;
	width: 80px;
}
ul {
	list-style: none;
    padding: 0;
}

.footer-col ul li:not(:last-child){
	margin-bottom: 5px;
}
.footer-col ul li a{
	font-size: 15px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #7747b6;
	padding-left: 8px;
}

.footer-col-right{
	padding: 15px;
    width: 524px;
}

.footer-col-right h4{
	 font-size: 30px;
	 color: #ffffff;
	 margin-bottom: 0px;
	 font-weight: 500%;
}
.footer-col-right p{
    font-size: 15px;
}


@media screen and (max-width: 967px){
    .footer-col{
        float: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        padding: 15px;
}

</style>