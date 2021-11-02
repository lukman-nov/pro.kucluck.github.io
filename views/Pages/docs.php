<!DOCTYPE html>
<html lang="en">
<head>
    <!--meta tags-->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/docs.css">
    <script src="https://kit.fontawesome.com/9746709e58.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Bot Discord Premium | Kucluck Pro</title>
</head>

<body>
    <!--HEADER-->
    <?php include '../komponen/header.php'; ?>
    <!--HEAD DOCS-->
    <div class="d-flex justify-content-center command_head">
        <h1>Docs Kucluck Bot</h1>
    </div>
    <!--MENU DOCS-->
    <div class="container px-lg-5" id="command_head">
        <div class="row">
            <div class="col-sm-3" id="category">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-quickstart-list" data-bs-toggle="list" href="#list-quickstart" role="tab" aria-controls="list-quickstart"><i class="fas fa-stopwatch"></i> Quickstart</a>
                    <a class="list-group-item list-group-item-action" id="list-command-list" data-bs-toggle="list" href="#list-command" role="tab" aria-controls="list-command"><i class="far fa-comment-dots"></i> Command Bot</a>
                    <a class="list-group-item list-group-item-action" id="list-donate-list" data-bs-toggle="list" href="#list-donate" role="tab" aria-controls="list-donate"><i class="fas fa-donate"></i> Donate</a>
                </div>
            </div>
            <div class="col-sm-9">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="list-quickstart" role="tabpanel" aria-labelledby="list-quickstart-list">
                        <?php include './docs/quickstart/welcome.php'; ?>
                        <?php include './docs/quickstart/fitur.php'; ?>
                        <?php include './docs/quickstart/invitebot.php'; ?>
                        <?php include './docs/quickstart/joinserver.php'; ?>
                    </div>
                    <div class="tab-pane fade" id="list-command" role="tabpanel" aria-labelledby="list-command-list">
                        <?php include './docs/command/cara.php'; ?>
                        <?php include './docs/command/musik.php'; ?>
                        <?php include './docs/command/info.php'; ?>
                        <?php include './docs/command/fun.php'; ?>
                    </div>
                    <div class="tab-pane fade" id="list-donate" role="tabpanel" aria-labelledby="list-donate-list">
                        <?php include './docs/donate/donate.php'; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--FOOTER-->
    <?php include '../komponen/footer.php'; ?>
</body>
</html>