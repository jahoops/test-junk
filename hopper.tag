<hopper>

<style>
hopper {
  color: green;
}
hopper.big {
  font-size:44px;
}
</style>


<span onclick="changeme(this)">The world is an illusion, and so am I. Hello.</span>


<script>
function changeme(e) {
  document.querySelector('hopper span').innerHTML='Something to replace something, somewhere ...';
  document.querySelector('hopper span').style.backgroundColor='pink';
  console.log(e);
  e.innerHTML='using e works too';
}
</script>

</hopper>