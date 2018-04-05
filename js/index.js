$(document).ready(function() {
	// Define object constructors
	function Member(nickName, timeZone, primaryArena) {
		this.nickName = nickName;
		this.timeZone = timeZone;
		this.primaryArena = primaryArena;
	}
	
	function Guild(name, tag, members) {
		this.name = name;
		this.tag = tag;
		this.members = members;
	}
	
	var guilds = [
		new Guild("Inhuman", "[127]", [
			new Member("Abz", "01:00", "GA"),
			new Member("Alex", "03:00", "?"),
			new Member("Alisa", "12:00", "?"),
			new Member("Andriano", "10:00", "A"),
			new Member("Anunah", "06:00", "GA"),
			new Member("Banda", "09:00", "A"),
			new Member("Basta", "05:00", "?"),
			new Member("Bevier", "02:00", "A"),
			new Member("Blaster", "01:00", "A"),
			new Member("Bossanta", "05:00", "A"),
			new Member("Cayen Peps", "-06:00", "A"),
			new Member("CnApTaK", "13:00", "GA"),
			new Member("Crom", "-03:00", "A"),
			new Member("Dim", "07:00", "A"),
			new Member("Dingoes", "10:30", "A"),
			new Member("Escaria", "-01:00", "A"),
			new Member("Fantik", "04:00", "GA"),
			new Member("Flick", "10:00", "A"),
			new Member("Flint", "02:30", "A"),
			new Member("Holo", "00:00", "?"),
			new Member("Hunter", "05:00", "?"),
			new Member("John Ketch", "13:00", "A"),
			new Member("Kitty", "12:00", "A"),
			new Member("Kopcap", "05:30", "GA"),
			new Member("KviSt", "10:00", "GA"),
			new Member("Largent", "-08:00", "A"),
			new Member("Lily", "09:30", "GA"),
			new Member("Lime", "05:30", "A"),
			new Member("Lucifer", "02:00", "?"),
			new Member("Maxim", "06:00", "?"),
			new Member("Mr. Hyde", "12:00", "GA"),
			new Member("Msquad", "01:00", "A"),
			new Member("Nishan", "04:00", "A"),
			new Member("Pak", "03:00", "?"),
			new Member("Pashtet", "07:00", "GA"),
			new Member("Piggies", "06:00", "GA"),
			new Member("Raven", "06:00", "A"),
			new Member("Saki", "05:00", "A"),
			new Member("Shabou", "-08:00", "A"),
			new Member("Shining", "01:00", "A"),
			new Member("Suzuya", "00:00", "?"),
			new Member("Torch", "05:45", "?"),
			new Member("Vasya", "03:00", "GA"),
			new Member("Vision", "-10:00", "A"),
			new Member("Witcher", "00:00", "GA"),
			new Member("XQ", "-01:00", "GA"),
			new Member("Zidzen", "01:00", "A")
		]),
		new Guild("Inhuman 2", "[127]", [
			new Member("Antz r", "10:00", "A"),
			new Member("aTn", "02:00", "A"),
			new Member("Eltrololo", "03:00", "A"),
			new Member("Invalid1337", "01:00", "A"),
			new Member("Jura", "02:00", "?"),
			new Member("Khilda", "13:00", "?"),
			new Member("Lacro", "02:00", "?"),
			new Member("Lana", "03:00", "?"),
			new Member("Lilyhuang", "10:30", "?"),
			new Member("Nightmare", "13:00", "GA"),
			new Member("Partizan", "05:00", "A"),
			new Member("Rubyheart", "10:00", "A"),
			new Member("Tinker", "03:00", "?"),
			new Member("Valkyrie", "05:00", "?"),
			new Member("Wally", "02:00", "?"),
			new Member("Westo", "08:00", "?")
		]),
		new Guild("300", "[300]", [
			new Member("Andy one", "11:00", "?"),
			new Member("Antz Star", "-10:00", "GA"),
			new Member("Coccaribe", "00:00", "?"),
			new Member("Cpot", "-08:00", "?"),
			new Member("dbeen", "02:00", "?"),
			new Member("Ephialtes", "-01:00", "?"),
			new Member("Faruk", "01:00", "?"),
			new Member("Furax", "-02:00", "?"),
			new Member("Guki", "04:00", "?"),
			new Member("Heme", "02:00", "?"),
			new Member("Henry", "07:00", "?"),
			new Member("Hirshi", "02:00", "?"),
			new Member("Judas C", "-04:00", "?"),
			new Member("KaylaJ", "08:00", "?"),
			new Member("Khorne", "01:00", "?"),
			new Member("Korupt", "-03:00", "?"),
			new Member("Kucks", "-05:00", "?"),
			new Member("Leofigo", "01:00", "?"),
			new Member("Leon", "06:30", "?"),
			new Member("Leon 2", "-01:00", "?"),
			new Member("Luna", "06:00", "?"),
			new Member("Madara", "02:00", "?"),
			new Member("Marc", "01:00", "?"),
			new Member("Mautie", "01:00", "?"),
			new Member("Mysto", "-05:00", "?"),
			new Member("NemesisX", "01:00", "?"),
			new Member("Nikani", "03:00", "?"),
			new Member("No 1", "-01:00", "?"),
			new Member("Nord", "03:00", "?"),
			new Member("Pinup", "-06:00", "?"),
			new Member("Pipo", "06:30", "?"),
			new Member("Pippett", "01:00", "?"),
			new Member("Pong", "-08:00", "?"),
			new Member("Popeye", "01:00", "?"),
			new Member("Rage", "01:00", "?"),
			new Member("Raven", "01:00", "?"),
			new Member("ti", "01:00", "?"),
			new Member("Tic-Tac", "05:30", "?"),
			new Member("T!no", "-02:00", "?"),
			new Member("Ultra", "09:00", "?"),
			new Member("Underdog", "-01:00", "?"),
			new Member("Unkzilla", "-09:00", "?"),
			new Member("Znorky", "01:00", "?")
		]),
		new Guild("Evolution", "[Evo]", [
			new Member("Aleyster", "03:00", "?"),
			new Member("Amp'd", "-08:00", "?"),
			new Member("AssKickA", "02:00", "?"),
			new Member("Auven", "-05:00", "?"),
			new Member("Avor", "01:00", "?"),
			new Member("Babe", "01:00", "?"),
			new Member("BIL", "08:00", "?"),
			new Member("Bruhu", "-08:00", "?"),
			new Member("Calipo", "07:00", "?"),
			new Member("Carlito", "01:00", "?"),
			new Member("Chain", "-05:00", "?"),
			new Member("Chrome", "07:00", "?"),
			new Member("db", "01:00", "?"),
			new Member("DDevoBabe", "-02:00", "?"),
			new Member("Fejz", "01:00", "?"),
			new Member("Furia", "01:00", "?"),
			new Member("Heisl", "01:00", "?"),
			new Member("Hotrod", "-03:00", "?"),
			new Member("Japie", "05:00", "?"),
			new Member("Keithruby", "08:00", "?"),
			new Member("Lamilan", "09:00", "?"),
			new Member("Laxa", "01:00", "?"),
			new Member("Loof", "-05:00", "?"),
			new Member("Losser", "01:00", "?"),
			new Member("MikeHunt", "-08:00", "?"),
			new Member("Murderer", "03:00", "?"),
			new Member("Murf", "07:00", "?"),
			new Member("Mystique", "-05:00", "?"),
			new Member("Nosferatu", "-08:00", "?"),
			new Member("Panic", "01:00", "?"),
			new Member("Pinhead", "02:00", "?"),
			new Member("Prophylastic", "-08:00", "?"),
			new Member("Pug Nutz", "-06:00", "?"),
			new Member("qiuH", "01:00", "?"),
			new Member("Razer", "-07:00", "?"),
			new Member("Rogue", "-06:00", "?"),
			new Member("Rough Souls", "01:00", "?"),
			new Member("Rox", "10:00", "?"),
			new Member("Slusk", "01:00", "?"),
			new Member("Strohhut", "01:00", "?"),
			new Member("Teez", "-04:00", "?"),
			new Member("TheRing", "-04:00", "?"),
			new Member("T|M", "01:00", "?"),
			new Member("Tyrolis", "01:00", "?"),
			new Member("Weezel", "01:00", "?")
		]),
		new Guild("United", "[U]", [
			new Member("Akuma.k", "02:00", "?"),
			new Member("Anagrys", "09:00", "?"),
			new Member("Angerphyte", "02:00", "?"),
			new Member("Axl", "01:00", "?"),
			new Member("Axtli", "02:00", "?"),
			new Member("BlackGod", "01:00", "?"),
			new Member("Botto", "00:00", "?"),
			new Member("Diablo", "13:00", "?"),
			new Member("Dipre team", "01:00", "?"),
			new Member("Donahoe", "-07:00", "?"),
			new Member("donnyj1993", "-05:00", "?"),
			new Member("Eyen", "02:00", "?"),
			new Member("Fabian", "-06:00", "?"),
			new Member("Fana", "02:00", "?"),
			new Member("Filtz", "02:00", "?"),
			new Member("Gallagher", "-06:00", "?"),
			new Member("Geralt", "06:00", "?"),
			new Member("gesunegro", "01:00", "?"),
			new Member("Hades", "-06:00", "?"),
			new Member("Hehtosai", "-05:00", "?"),
			new Member("Joel", "02:00", "?"),
			new Member("Jokstar", "10:00", "?"),
			new Member("Jynx", "-06:00", "?"),
			new Member("Kalash", "02:00", "?"),
			new Member("Kirito", "11:00", "?"),
			new Member("Krakmart", "02:00", "?"),
			new Member("Lance", "07:00", "?"),
			new Member("Leezer", "01:00", "?"),
			new Member("Naoned", "02:00", "?"),
			new Member("Pandrone", "01:00", "?"),
			new Member("Panther", "13:00", "?"),
			new Member("Personne", "02:00", "?"),
			new Member("RexMortex", "04:00", "?"),
			new Member("Ruben", "01:00", "?"),
			new Member("Salvator", "06:30", "?"),
			new Member("SemperFi", "01:00", "?"),
			new Member("Smithe", "-05:00", "?"),
			new Member("Stolf", "03:00", "?"),
			new Member("TaMiWai", "03:30", "?"),
			new Member("Tartines", "00:00", "?"),
			new Member("Wiz", "03:00", "?"),
			new Member("Zachek", "06:00", "?")
		]),
		new Guild("Illuminati", "[Ill]", [
			new Member("Ajoi", "06:00", "?"),
			new Member("Arconius", "08:00", "?"),
			new Member("Ballsdeep", "-04:00", "?"),
			new Member("Bambam", "02:00", "?"),
			new Member(":BEAST:", "-02:00", "?"),
			new Member("Belerz", "02:00", "?"),
			new Member("Daytona", "01:00", "?"),
			new Member("Earlender", "02:00", "?"),
			new Member("Giantbanes", "-06:00", "?"),
			new Member("Gurlug", "01:00", "?"),
			new Member("iube.rom", "02:00", "?"),
			new Member("Jariya", "11:00", "?"),
			new Member("Jeysun", "-05:00", "?"),
			new Member("Jurgen", "01:00", "?"),
			new Member("Kacenty", "01:00", "?"),
			new Member("kuDDe", "02:00", "?"),
			new Member("Lady Jam", "-05:00", "?"),
			new Member("Maev", "02:00", "?"),
			new Member("mamcoi", "07:00", "?"),
			new Member("MarcG", "04:00", "?"),
			new Member("Mauiraimana", "-10:00", "?"),
			new Member("Maulers", "08:00", "?"),
			new Member("Mormel", "02:00", "?"),
			new Member("Moroloco", "02:00", "?"),
			new Member("Motos", "02:00", "?"),
			new Member("Mystique", "-04:00", "?"),
			new Member("Neurodude", "-05:00", "?"),
			new Member("Nicko", "-01:00", "?"),
			new Member("Odinsan", "00:00", "?"),
			new Member("Play", "01:00", "?"),
			new Member("Pro-noob", "10:00", "?"),
			new Member("Razorbak", "-06:00", "?"),
			new Member("Renegade", "10:00", "?"),
			new Member("Sage M", "04:00", "?"),
			new Member("Sargeras", "05:00", "?"),
			new Member("Sean", "12:00", "?"),
			new Member("Seylinya", "11:00", "?"),
			new Member("Shrimpy", "02:00", "?"),
			new Member("Sombra", "01:00", "?"),
			new Member("Sp9", "03:00", "?"),
			new Member("Thom", "01:00", "?"),
			new Member("Torpi", "01:00", "?"),
			new Member("Vipera", "01:00", "?"),
			new Member("Virus", "01:00", "?"),
			new Member("Von", "01:00", "?"),
			new Member("Xenadin", "08:00", "?"),
			new Member("Xenathal", "-08:00", "?"),
			new Member("Zeent", "01:00", "?"),
		]),
		new Guild("Poccnr", "[Rus]", [
			new Member("Nikitos", "05:30", "?"),
			new Member("Uziah", "02:00", "?")
		]),
		new Guild("Frenchy", "[F]", [
			new Member("Maraa", "05:45", "?")
		])
	]
	
	function displayMembers() {
		var numberOfGuilds = guilds.length;
		for (i = 0; i < numberOfGuilds; i++) {
			var numberOfMembers = guilds[i].members.length;
			var guildTag = guilds[i].tag;
			for (j = 0; j < numberOfMembers; j++) {
				displayMember(guildTag, guilds[i].members[j]);
			}
		}
	}
	
	function displayMember(guildTag, member) {
		var tableRow = document.createElement("TR");
		
		// TimeZone
		var tableColumnTimeZone = document.createElement("TD");
		var timeZone = document.createTextNode(member.timeZone);
		tableColumnTimeZone.appendChild(timeZone);
		tableRow.appendChild(tableColumnTimeZone);
		
		// Primary Arena
		var tableColumnPrimaryArena = document.createElement("TD");
		var primaryArena = document.createTextNode(member.primaryArena);
		tableColumnPrimaryArena.appendChild(primaryArena);
		tableRow.appendChild(tableColumnPrimaryArena);
		
		// Guild Tag
		var tableColumnTag = document.createElement("TD");
		var tag = document.createTextNode(guildTag);
		tableColumnTag.appendChild(tag);
		tableRow.appendChild(tableColumnTag);
		
		// NickName
		var tableColumnNickName = document.createElement("TD");
		var nickName = document.createTextNode(member.nickName);
		tableColumnNickName.appendChild(nickName);
		tableRow.appendChild(tableColumnNickName);
		
		// Time till reward
		var tableColumnCountdown = document.createElement("TD");
		tableRow.appendChild(tableColumnCountdown);
		
		document.getElementById("memberList").appendChild(tableRow);
	}
	
	displayMembers();
	
    function update()
{
	// Retrieve the current time
	var time = new Date();
	var hours = time.getUTCHours();
	var minutes = time.getUTCMinutes();
	var seconds = time.getUTCSeconds();
    
    {
        var memberList = document.getElementById('memberList');
	var numberOfMembers = memberList.rows.length;
		
		// Calculate offset
		{
			// Current time in seconds
			var utcInSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;

			// Reward hour is in 21:00 local time
			var rewardHourInSeconds = 21 * 60 * 60;

			var dayInSeconds = 24 * 60 * 60;

			for (i = 0; i < numberOfMembers; i++)
			{
				var currentMember = memberList.rows.item(i).cells;

				// Split the timezone into hours and minutes
				var timezone = currentMember.item(0).innerHTML.split(":");
				var timezoneHours = parseInt(timezone[0]);
				var timezoneMinutes = parseInt(timezone[1]);

				// Convert timezone into seconds
				var timezoneInSeconds = (timezoneHours * 60 * 60) + (timezoneMinutes * 60);

				// Calculate the local time
				var localTimeInSeconds = utcInSeconds + timezoneInSeconds;
				if (localTimeInSeconds > dayInSeconds) {
					localTimeInSeconds = localTimeInSeconds - dayInSeconds;
				}
				else if (localTimeInSeconds < 0) {
					localTimeInSeconds = dayInSeconds + localTimeInSeconds;
				}

				// Calculate the remaining time before next rewards
				if (localTimeInSeconds < rewardHourInSeconds) {
					secondsTillReward = rewardHourInSeconds - localTimeInSeconds;
				}
				else {
					secondsTillReward = (dayInSeconds - localTimeInSeconds) + rewardHourInSeconds;
				}
				
				var hourCount = Math.floor((secondsTillReward / 60) / 60);
				var minuteCount = Math.floor((secondsTillReward - (hourCount * 60 * 60)) / 60);
				var secondCount = secondsTillReward - ((hourCount * 60 * 60) + (minuteCount * 60));
				
				// Display the time before rewards
				currentMember.item(4).innerHTML = hourCount + ":" + checkTime(minuteCount) + ":" + checkTime(secondCount);				
			}
		}
		
		// Set the correct colors into cells
		{
			for (i = 0; i < numberOfMembers; i++)
			{
				var thisCell = memberList.rows.item(i).cells;

				var thisResult = thisCell.item(4).innerHTML.split(":");

				if (parseInt(thisResult[0]) == 0 || (parseInt(thisResult[0]) == 23 && parseInt(thisResult[1]) > 57))
				{
					applyColor(thisCell, "red");
				}
				else if (parseInt(thisResult[0]) == 1)
				{
					applyColor(thisCell, "orange");
				}
				else if (parseInt(thisResult[0]) == 2)
				{
					applyColor(thisCell, "yellow");
				}
				else if (parseInt(thisResult[0]) == 23 || parseInt(thisResult[0]) == 22)
				{
                    			applyColor(thisCell, "greenyellow");
				}
				else
				{
                    			applyColor(thisCell, "white");
				}
			}
		}

		// Sort the cells by time
		{
			var done = false;
			
			while (done == false)
			{
				done = true;

				for (i = 0; i < numberOfMembers - 1; i++)
				{
					var firstCell = memberList.rows.item(i).cells;
					var secondCell = memberList.rows.item(i + 1).cells;
					
					var firstValues = firstCell.item(4).innerHTML.split(":");
					var secondValues = secondCell.item(4).innerHTML.split(":");
                    
					var firstHour = parseInt(firstValues[0]);
					var secondHour = parseInt(secondValues[0]);
		
					if (firstHour >= 22)
					{
						firstHour = firstHour - 24;
					}
		
					if (secondHour >= 22)
					{
						secondHour = secondHour - 24;
					}

					if (firstHour > secondHour || (parseInt(firstValues[0]) == parseInt(secondValues[0]) && parseInt(firstValues[1]) > parseInt(secondValues[1])))
					{
						var tempTime = firstCell.item(0).innerHTML;
						var tempArena = firstCell.item(1).innerHTML;
						var tempGuild = firstCell.item(2).innerHTML;
						var tempName = firstCell.item(3).innerHTML;
						var tempOffset = firstCell.item(4).innerHTML;
						
						firstCell.item(0).innerHTML = secondCell.item(0).innerHTML;
						firstCell.item(1).innerHTML = secondCell.item(1).innerHTML;
						firstCell.item(2).innerHTML = secondCell.item(2).innerHTML;
						firstCell.item(3).innerHTML = secondCell.item(3).innerHTML;
						firstCell.item(4).innerHTML = secondCell.item(4).innerHTML;

						secondCell.item(0).innerHTML = tempTime;
						secondCell.item(1).innerHTML = tempArena;
						secondCell.item(2).innerHTML = tempGuild;
						secondCell.item(3).innerHTML = tempName;
						secondCell.item(4).innerHTML = tempOffset;
						
						done = false;
					}
				}
			}
		}
    }
	
	{
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        document.getElementById('txt').innerHTML =
        "GMT: " + hours + ":" + minutes + ":" + seconds;
	document.getElementById('txt').style.color = "white";
    }
    
    var t = setTimeout(update, 950);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function applyColor(cell, color) {
	cell.item(0).style.color = color;
	cell.item(1).style.color = color;
	cell.item(2).style.color = color;
	cell.item(3).style.color = color;
	cell.item(4).style.color = color;
}

update();
});
