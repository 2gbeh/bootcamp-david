// JavaScript Document

function embed(key, value) {
  document.getElementById(key).innerHTML = value;
}

function main() {
  var buf = pfx = img = mod = '';
  var li = [];

  li = [
    ['java','Java'],
    ['py','Python'],
    ['rb','Ruby'],
    ['vb','Visual Basic (VB)'],
    ['cs','C#']
  ];
  for (let i in li) {
      img = 'background-image:url(assets/mods/'+li[i][0]+'.png);';
      mod = li[i][1];

      buf += '<td>';
      buf += '<div class="thumb" style="' + img + '">&nbsp;</div>';
      buf += '<div class="name">' + mod + ' Software Development</div>';
      buf += '<div class="weeks">3 months training</div>';
      buf += '<div class="price"><b>&#8358; 90,000</b></div>';
      buf += '<div class="action"><a href="https://wa.me/2348169960927" target="_new">Register</a></div>';
      buf += '</td>';
  } 
  embed('se',buf);

  buf = '';
  li = [
    ['web','HTML, CSS & JS (Front-end)'],
    ['php','Hypertext Pre-Processor (PHP)'],
    ['asp','ActiveServer Pages (ASP)'],
    ['node','JavaScript (Node.js)'],
    ['jsp','JavaServer Pages (JSP)']
  ];
  for (let i in li) {
      img = 'background-image:url(assets/mods/'+li[i][0]+'.png);';
      mod = li[i][1];

      buf += '<td>';
      buf += '<div class="thumb" style="' + img + '">&nbsp;</div>';
      buf += '<div class="name">Web Deisgn & Development with ' + mod + '</div>';
      buf += '<div class="weeks">3 months training</div>';
      buf += '<div class="price"><b>&#8358; 90,000</b></div>';
      buf += '<div class="action"><a href="https://wa.me/2348169960927" target="_new">Register</a></div>';
      buf += '</td>';
  } 
  embed('wd',buf);

  buf = '';
  li = [
    ['django','Django'],
    ['laravel','Laravel'],
    ['mern','MERN'],
    ['rails','Rails'],
    ['spring','Spring'],
    ['net','.NET']
  ];
  for (let i in li) {
      img = 'background-image:url(assets/mods/'+li[i][0]+'.png);';
      mod = li[i][1];

      buf += '<td>';
      buf += '<div class="thumb" style="' + img + '">&nbsp;</div>';
      buf += '<div class="name">Web Application Development using ' + mod + ' Framework</div>';
      buf += '<div class="weeks">4 months training</div>';
      buf += '<div class="price"><b>&#8358; 120,000</b></div>';
      buf += '<div class="action"><a href="https://wa.me/2348169960927" target="_new">Register</a></div>';
      buf += '</td>';
  } 
  embed('wf',buf);  

  buf = '';
  li = [
    ['jsx','React Native'],
    ['dart','Flutter'],
    ['apk','Android','Java'],
    ['kt','Android','Kotlin']
  ];
  for (let i in li) {
      img = 'background-image:url(assets/mods/'+li[i][0]+'.png);';
      mod = li[i][1];
      ext = li[i][2];

      buf += '<td>';
      buf += '<div class="thumb" style="' + img + '">&nbsp;</div>';
      pfx = i < 2? '<br/>(Cross-platform)': ' with ' + li[i][2];
      buf += '<div class="name">' + mod +' App Development' + pfx + '</div>';
      buf += '<div class="weeks">4 months training</div>';
      buf += '<div class="price"><b>&#8358; 150,000</b></div>';
      buf += '<div class="action"><a href="https://wa.me/2348169960927" target="_new">Register</a></div>';
      buf += '</td>';
  } 
  embed('md',buf);    

  buf = '';
  li = [
    ['office','Office Fundamentals (Word, Excel & PowerPoint)'],
    ['excel','Excel for Data Analysis (with SQL)'],
    ['sql','SQL Server - Database Administrator (DBA)'],
    ['access','Access - Enterprise Application Software (EAS)'],
    ['azure','Azure - Cloud Applicaiton Fundamentals']
  ];
  for (let i in li) {
      img = 'background-image:url(assets/mods/'+li[i][0]+'.png);';
      mod = li[i][1];

      buf += '<td>';
      buf += '<div class="thumb" style="' + img + '">&nbsp;</div>';
      buf += '<div class="name">Microsoft ' + mod + '</div>';
      buf += '<div class="weeks">3 months training</div>';
      buf += '<div class="price"><b>&#8358; 60,000</b></div>';
      buf += '<div class="action"><a href="https://wa.me/2348169960927" target="_new">Register</a></div>';
      buf += '</td>';
  } 
  embed('mp',buf);    

  buf = '';
  li = [
    ['xp','Typing Practice & Computer Literacy'],
    ['cdr','Graphics Design with CorelDRAW&reg;'],
    ['psd','Graphics Design with Adobe&reg; Photoshop'],
    ['mysql','MySQL Database Design & Development'],
    ['aws','Amazon Web Services (AWS) Fundamentals'],
    ['git','Distributed Version Control with Git/GitHub'],
    ['linux','Desktop Support & Admin with Linux OS (Ubuntu)'],
    ['win','Desktop Support & Admin with Windows OS (7/10)']
  ];
  for (let i in li) {
      img = 'background-image:url(assets/mods/'+li[i][0]+'.png);';
      mod = li[i][1];

      buf += '<td>';
      buf += '<div class="thumb" style="' + img + '">&nbsp;</div>';
      buf += '<div class="name">' + mod + '</div>';
      buf += '<div class="weeks">3 months training</div>';
      buf += '<div class="price"><b>&#8358; 60,000</b></div>';
      buf += '<div class="action"><a href="https://wa.me/2348169960927" target="_new">Register</a></div>';
      buf += '</td>';
  } 
  embed('fc',buf);       
}
