<div id="page-wrapper">
    <?php print render($page['page-top']); ?>
    <header id="top">
        <div id="logo">
        </div>
        <nav></nav>
    </header>
    <div id="slide-show"><?php print render($page['slide-show']); ?></div>
    <article><?php print render($page['content']); ?></article>
    <footer><?php print render($page['page-footer']); ?></footer>
    <?php print render($page['page-bottom']); ?>
</div>