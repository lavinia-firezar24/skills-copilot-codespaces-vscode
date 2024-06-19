function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  if(memberValue == 'Select') {
    alert('Please select a member');
    return false;
  }
  var memberSkills = document.getElementById('memberSkills');
  var memberSkillsValue = memberSkills.value;
  if(memberSkillsValue == '') {
    alert('Please enter the member skills');
    return false;
  }
  var memberSkillsList = document.getElementById('memberSkillsList');
  var memberSkillsListArray = memberSkillsList.innerHTML.split(',');
  if(memberSkillsListArray.indexOf(memberText) >= 0) {
    alert('Skills for this member already exist');
    return false;
  }
  memberSkillsListArray.push(memberText);
  memberSkillsList.innerHTML = memberSkillsListArray.join(',');
  member.options[member.selectedIndex].disabled = true;
  memberSkills.value = '';
  return false;
}